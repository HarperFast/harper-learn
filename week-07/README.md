# Week 07: MQTT in Harper - Real-Time Messaging

**Published:** [Date TBD] • **Duration:** ~10 minutes • **Difficulty:** Intermediate

---

## 📺 Watch On

- **[YouTube](https://youtube.com/watch?v=VIDEO_ID)** — Primary platform
- **[Additional Platform]** — Coming soon

---

## Overview

This week we explore MQTT integration in Harper. You'll learn how to use Harper's built-in MQTT broker to enable real-time messaging and pub/sub patterns in your applications. We'll cover connecting to Harper's MQTT broker, publishing messages, subscribing to topics, and building a real-time data pipeline that combines MQTT with Harper's database capabilities.

---

## Talk Track

**[0:00-0:30] What is MQTT?**
- MQTT protocol overview and lightweight pub/sub messaging
- Reference mqtt.org for complete protocol specification
- MQTT finding a renaissance in AI Ops - pushing edge telemetry back to datacenter
- But: Harper's native replication does it faster with less overhead when you inference *in* Harper *at* the edge
- Still, MQTT matters for interop with standard IoT/edge devices

**[0:30-2:30] Harper's Real-Time Messaging Support**
- Harper's built-in real-time messaging capabilities
- Harper acts as an MQTT broker - no external broker needed
- Reference: https://docs.harperdb.io/docs/developers/real-time
- MQTT basics in Harper: topics, publish/subscribe pattern, QoS levels
- Enabling and configuring Harper's MQTT broker

**[2:30-5:00] Whiteboard: Mapping MQTT Topics to Database Structure**
- [Switch to second camera/paper & pen]
- MQTT topics are hierarchical (e.g., sensors/temperature/room1)
- Harper is a database - how do we map topics to tables?
- Pattern: Create a topics table with one row per topic
- Harper's advantage: messages column can accumulate all messages without breaking schema
- Drawing the data model: topics table → messages array
- Why this works: Harper's flexible schema handles growing message arrays

**[5:00-7:30] Enabling MQTT and Testing Connections**
- [Back to main camera/screen]
- MQTT is disabled by default - must be explicitly enabled
- Demonstrating connection failure without MQTT enabled
- Configuring Harper to enable MQTT broker
- Testing with MQTT Explorer: connecting to test.mosquitto.org (works)
- Testing with MQTT Explorer: connecting to Harper localhost (enabled but...)
- It's not quite working with open tools yet - something's missing
- Understanding why standard MQTT tools struggle with Harper's broker

**[7:30-9:00] Putting in the Batteries: mqtt-broker-interop-plugin**
- Harper's MQTT implementation is optimized for Harper-to-Harper communication
- Standard MQTT tools need the interop plugin for compatibility
- Installing and configuring mqtt-broker-interop-plugin
- Reconnecting with MQTT Explorer - now it works!
- Publishing and subscribing with standard MQTT tools
- Understanding when you need the interop plugin vs native Harper MQTT

**[9:00-9:30] Real Device Demo: Off-the-Shelf MQTT Device**
- Connecting an actual MQTT device to Harper
- Device publishes messages to its topic
- Checking Harper's topics table - the device appears!
- Viewing the accumulated messages in the messages column
- From edge device to database in real-time

**[9:30-10:00] Wrap-up**
- What we built: MQTT broker + database integration
- Harper as both message broker and data store
- Best practices for MQTT in production
- Next steps: Building real-time AI Ops pipelines

---

## Key Learning Outcome

✓ **Master MQTT in Harper** — Learn to leverage Harper's built-in MQTT broker to build real-time messaging systems, integrate pub/sub patterns with database storage, and create scalable real-time data pipelines.

---

## Timestamps

> *Will be added after video is published*

- `00:00` — What is MQTT?
- `00:30` — Harper's Real-Time Messaging Support
- `02:30` — Whiteboard: Mapping MQTT Topics to Database Structure
- `05:00` — Enabling MQTT and Testing Connections
- `07:30` — Putting in the Batteries: mqtt-broker-interop-plugin
- `09:00` — Real Device Demo: Off-the-Shelf MQTT Device
- `09:30` — Wrap-up

---

## Resources & Links

**Documentation:**
- [Harper MQTT Documentation](https://docs.harperdb.io/docs/developers/mqtt)
- [MQTT Protocol Specification](https://mqtt.org/mqtt-specification/)
- [Harper Real-Time Features](https://docs.harperdb.io/docs/developers/real-time)

**Community:**
- [Discord Community](https://discord.gg/kfYmMTXc9b)
- [GitHub Repository](https://github.com/HarperFast/harper-learn)

**Tools Used:**
- Harper CLI
- MQTT.js (Node.js client)
- MQTT Explorer (for testing)
- Node.js & npm

**Example Code:**
- [mqtt-publisher/](mqtt-publisher/) — Publishing example
- [mqtt-subscriber/](mqtt-subscriber/) — Subscribing example
- [realtime-pipeline/](realtime-pipeline/) — Complete pipeline

---

## Prerequisites

- Completion of Week 06
- Understanding of asynchronous JavaScript
- Basic knowledge of pub/sub patterns
- Harper instance running locally
- Node.js installed

---

## Discussion & Feedback

**Quick questions?** Join the [Discord](https://discord.gg/89sbtZTd) for real-time help
**Episode feedback?** [Submit via GitHub](../../issues/new?template=feedback.yml)
**Topic suggestions?** [Request a topic](../../issues/new?template=topic-request.yml)

---

**Next Episode:** Week 08 — [Topic TBD]

---

<div align="center">

Subscribe on [YouTube](https://www.youtube.com/@harper-fast) • Join the [Discord](https://discord.gg/89sbtZTd)

</div>
