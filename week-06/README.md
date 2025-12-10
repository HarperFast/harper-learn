# Week 06: Intro to MQTT & Harper

**Published:** [Date TBD] • **Duration:** ~10-11 minutes • **Difficulty:** Beginner

---

## 📺 Watch On

- **[YouTube](https://youtube.com/watch?v=VIDEO_ID)** — Primary platform
- **[Additional Platform]** — Coming soon

---

## Overview

This week we introduce MQTT and explore how Harper supports real-time messaging out of the box. You'll learn the fundamentals of MQTT, why it matters for modern applications, and how Harper's built-in capabilities make it easy to add pub/sub messaging to your projects without external dependencies.

---

## Talk Track

**[0:00-1:00] What is MQTT and Why It Matters**
- MQTT = OASIS standard messaging protocol for the Internet of Things (per mqtt.org)
- Extremely lightweight publish/subscribe messaging transport
- Designed for resource-constrained devices and unreliable networks
- Small client footprint - runs on microcontrollers
- Scales to millions of IoT devices
- Common use cases: automotive, manufacturing, telecommunications, oil/gas, smart homes, AI Ops
- Three QoS levels for reliability, TLS encryption, persistent sessions

**[1:00-2:30] The Traditional MQTT Stack - Clients, Brokers, Topics**
- Reference: mqtt.org for complete architecture
- **Clients**: Publishers (send messages) and Subscribers (receive messages)
  - Bidirectional communication - a client can be both publisher and subscriber
- **Brokers**: Intermediaries that route messages between clients
  - Examples: Mosquitto, HiveMQ, EMQX
  - Manages connections, topic subscriptions, message delivery
- **Topics**: Organize messages by category (like file paths: `sensors/temperature/room1`)
  - Subscribers filter what messages they receive based on topics
  - Decoupled architecture: publishers don't know who's subscribing
- Traditional deployment: Separate broker + database + application logic = multiple services to coordinate

**[2:30-4:00] Harper's Native MQTT Capabilities**
- Harper is a fully integrated microlith - all in a 100MB process:
  - Database (SQL + NoSQL)
  - Messaging (including MQTT broker)
  - Caching
  - Application hosting
- MQTT broker is built-in - no external services needed
- Acts as broker AND database simultaneously
- Reference: https://docs.harperdb.io/docs/developers/real-time
- Traditional stack: Multiple services, multiple failure points, multiple configs
- Harper: One process, one config, one service to manage
- Messages can be persisted to database - no glue code required

**[4:00-5:00] Harper's MQTT Configuration**
- Review harperdb-config.yaml to show MQTT settings
- MQTT is enabled by default in Harper
- Default port: 1883 (standard MQTT port)
- Show where MQTT broker configuration lives
- No complex broker setup - just standard Harper config

**[5:00-7:00] Demo Part 1: Publisher & Subscriber Without Message Retention**
- Connect MQTT Explorer (or similar client) to Harper localhost:1883
- Open Harper Studio/UI to watch the database table in real-time
- Publisher sends messages to topic: `demo/test`
- Subscriber receives messages live
- Messages flow through broker but are NOT retained
- Show: No messages stored in Harper's table
- This is standard MQTT behavior - messages are ephemeral

**[7:00-9:00] Demo Part 2: Publisher & Subscriber WITH Message Retention**
- Enable message retention/persistence configuration
- Publisher sends messages to topic: `demo/sensor/temperature`
- Subscriber receives messages as before
- Switch to Harper table view - messages ARE being stored!
- Show: Each message appears in the Harper database table
- Query the messages with SQL while publisher is still sending
- Real-time messaging + automatic persistence
- No glue code, no separate storage layer - it just works

**[9:00-10:00] What Just Happened?**
- Harper acted as MQTT broker (handled pub/sub)
- Harper simultaneously stored messages to database
- Same topic hierarchy visible in both MQTT client and database
- Query messages immediately with SQL or NoSQL APIs
- One system, dual purpose: messaging + storage

**[10:00-10:30] Wrap-up & Next Steps**
- What we learned: MQTT fundamentals and Harper's integrated approach
- Benefits: simplified architecture, less infrastructure, automatic persistence

---

## Key Learning Outcome

✓ **Understand MQTT and Harper's Real-Time Messaging** — Learn what MQTT is, why it's useful, and how Harper's built-in MQTT broker simplifies your architecture by combining messaging and database in one system.

---

## Timestamps

> *Will be added after video is published*

- `00:00` — What is MQTT and Why It Matters
- `01:00` — The Traditional MQTT Stack - Clients, Brokers, Topics
- `02:30` — Harper's Native MQTT Capabilities
- `04:00` — Harper's MQTT Configuration
- `05:00` — Demo Part 1: Publisher & Subscriber Without Message Retention
- `07:00` — Demo Part 2: Publisher & Subscriber WITH Message Retention
- `09:00` — What Just Happened?
- `10:00` — Wrap-up & Next Steps

---

## Resources & Links

**Documentation:**
- [Harper Real-Time Documentation](https://docs.harperdb.io/docs/developers/real-time)
- [MQTT Protocol Overview](https://mqtt.org/)
- [Harper MQTT Documentation](https://docs.harperdb.io/docs/developers/mqtt)

**Community:**
- [Discord Community](https://discord.gg/kfYmMTXc9b)
- [GitHub Repository](https://github.com/HarperFast/harper-learn)

**Tools Used:**
- Harper instance
- MQTT Explorer (for testing)
- Web browser

---

## Prerequisites

- Completion of Week 05
- Harper instance running locally
- Basic understanding of client-server architecture

---

## Discussion & Feedback

**Quick questions?** Join the [Discord](https://discord.gg/89sbtZTd) for real-time help
**Episode feedback?** [Submit via GitHub](../../issues/new?template=feedback.yml)
**Topic suggestions?** [Request a topic](../../issues/new?template=topic-request.yml)

---

**Next Episode:** Week 07 — MQTT in Harper - Real-Time Messaging

---

<div align="center">

Subscribe on [YouTube](https://www.youtube.com/@harper-fast) • Join the [Discord](https://discord.gg/89sbtZTd)

</div>
