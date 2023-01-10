---
title: 死信队列
date: 2022-11-1 14:27:51
permalink: /middleWare/rabbitMQ/9/
categories:
  - rabbitMQ
tags:
  - rabbitMQ
---

# 七、死信队列

​		先从概念解释上搞清楚这个定义，死信，顾名思义就是无法被消费的消息，字面意思可以这样理解，一般来说，producer 将消息投递到 broker 或者直接到queue 里了，consumer 从 queue 取出消息 进行消费，但某些时候由于特定的原因**导致 queue 中的某些消息无法被消费**，这样的消息如果没有后续的处理，就变成了死信，有死信自然就有了死信队列。		

​		应用场景：为了保证订单业务的消息数据不丢失，需要使用到 RabbitMQ 的死信队列机制，当消息消费发生异常时，将消息投入死信队列中。还有比如说：用户在商城下单成功并点击去支付后在指定时间未支付时自动失效。

## 1、导致死信的原因

1. 消息 TTL 过期（等待时间）
2. 队列达到最大长度（队列满了，无法再添加数据到 mq 中）
3. 消息被拒绝（basic.reject 或 basic.nack）并且没有重新放到队列中（requeue=false）

## 2、流程

![image-20220425092306527](rabbitmq.assets/image-20220425092306527.png)

## 3、TTL过期导致死信

> 在开启消费者之后关闭消费者，再开启生产者就能使TTL过期导致死信

**生产者**

```java
public class Producer {
    private static final String NORMAL_EXCHANGE = "normal_exchange";

    public static void main(String[] args) throws Exception {
        Channel channel = RabbitMqUtils.getChannel();
        channel.exchangeDeclare(NORMAL_EXCHANGE, BuiltinExchangeType.DIRECT);
        //设置消息的 TTL 时间
        AMQP.BasicProperties properties = new
            AMQP.BasicProperties().builder().expiration("10000").build();
        //该信息是用作演示队列个数限制
        for (int i = 1; i < 11; i++) {
            String message = "info" + i;
            channel.basicPublish(NORMAL_EXCHANGE, "normal_routing_key", properties,
                                 message.getBytes());
            System.out.println("生产者发送消息:" + message);
        }
    }
}
```

**消费者**

```java
public class Consumer01 {
    //普通交换机名称
    private static final String NORMAL_EXCHANGE = "normal_exchange";
    //死信交换机名称
    private static final String DEAD_EXCHANGE = "dead_exchange";

    public static void main(String[] args) throws Exception {
        Channel channel = RabbitMqUtils.getChannel();
        //声明死信和普通交换机 类型为 direct
        channel.exchangeDeclare(NORMAL_EXCHANGE, BuiltinExchangeType.DIRECT);
        channel.exchangeDeclare(DEAD_EXCHANGE, BuiltinExchangeType.DIRECT);
        //声明死信队列
        String deadQueue = "dead-queue";
        channel.queueDeclare(deadQueue, false, false, false, null);
        //死信队列绑定死信交换机与 routingkey
        channel.queueBind(deadQueue, DEAD_EXCHANGE, "dead_routing_key");
        //正常队列绑定死信队列信息
        Map<String, Object> params = new HashMap<>();
        //正常队列设置死信交换机 参数 key 是固定值
        params.put("x-dead-letter-exchange", DEAD_EXCHANGE);
        //正常队列设置死信 routing-key 参数 key 是固定值
        params.put("x-dead-letter-routing-key", "dead_routing_key");

        String normalQueue = "normal-queue";
        channel.queueDeclare(normalQueue, false, false, false, params);
        channel.queueBind(normalQueue, NORMAL_EXCHANGE, "normal_routing_key");
        System.out.println("等待接收消息.....");

        channel.basicConsume(
            normalQueue,
            true,
            (consumerTag, delivery) -> {
                String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
                System.out.println("Consumer01 接收到消息" + message);
            },
            consumerTag -> {
            }
        );
    }
}
```

**死信消费者**

```java
public class Consumer02 {
    private static final String DEAD_EXCHANGE = "dead_exchange";

    public static void main(String[] argv) throws Exception {
        Channel channel = RabbitMqUtils.getChannel();
        channel.exchangeDeclare(DEAD_EXCHANGE, BuiltinExchangeType.DIRECT);
        String deadQueue = "dead-queue";
        channel.queueDeclare(deadQueue, false, false, false, null);
        channel.queueBind(deadQueue, DEAD_EXCHANGE, "dead_routing_key");
        System.out.println("等待接收死信队列消息.....");
        channel.basicConsume(
            deadQueue,
            true,
            (consumerTag, delivery) -> {
                String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
                System.out.println("Consumer02 接收死信队列的消息" + message);
            },
            consumerTag -> {
            }
        );
    }
}
```

## 4、队列达到最大长度

**生产者**

```java
//去掉设置消息的 TTL 时间
//AMQP.BasicProperties properties = new AMQP.BasicProperties().builder().expiration("10000").build();
```

**消费者**

```java
//设置队列长度
params.put("x-max-length", 6);
```

**死信消费者不变**

## 5、消息被拒绝

**生产者不变**

**消费者**

 ```java
channel.basicConsume(
    normalQueue,
    /*开启手动应答*/
    false,
    (consumerTag, delivery) -> {
        String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
        if (message.equals("info5")) {
            System.out.println("Consumer01 拒接接收到消息" + message);
            /*requeue为false表示消息不重新入队,成为死信队列*/
            channel.basicReject(delivery.getEnvelope().getDeliveryTag(), false);
        } else {
            System.out.println("Consumer01 接收到消息" + message);
            /*批量应答*/
            channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false);
        }
    },
    consumerTag -> {
    }
);
 ```

**死信消费者不变**