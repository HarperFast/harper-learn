# MQTT Integration with Vue.js - LED Sign Controller

**Duration:** ~10 minutes • **Difficulty:** Intermediate

---

## Overview

This episode brings IoT into the mix by building a Vue.js application that controls a physical LED sign through Harper's built-in MQTT broker. You'll learn how to use Harper's native MQTT support to create a web interface that sends real-time commands to hardware, demonstrating the power of bridging web development with IoT devices.

**What we'll build:**
- A Vue.js control panel running on Harper
- Three MQTT topics: `power`, `brightness`, and `message`
- Real-time LED sign control (power on/off, brightness adjustment, message updates)
- Live message subscription showing what's currently displayed, even from other clients
- LED sign configured to connect to Harper's MQTT broker

By the end, you'll have a working multi-client system where multiple users can see and control the same LED sign in real-time.

## UI Preview

![LED MQTT Sign Control Interface](https://raw.githubusercontent.com/HarperFast/harper-learn/main/backlog/assets/mqtt-ui.png)

---

## Talk Track

**[0:00-0:30] Introduction**
- Quick recap of Vue.js app
- Today's focus: Adding MQTT to control devices
- Demo preview: Sending messages from browser to device

**[0:30-2:00] MQTT Basics & Harper's Built-in Broker**
- What is MQTT and why use it for IoT
- Pub/sub pattern overview
- Harper's built-in MQTT broker (no external broker needed!)
- Topic structure: `power`, `brightness`, `message`

**[2:00-3:30] Configuring the LED Sign**
- Connecting LED sign to Harper's MQTT broker
- Subscribing the sign to control topics
- Testing basic connectivity with MQTT tools

**[3:30-5:30] Building the Vue.js Control Panel**
- Creating the UI: power toggle, brightness slider, message input
- Publishing to MQTT topics through Harper's API
- Real-time controls with no page refresh

**[5:30-7:30] Adding Live Message Subscription**
- Subscribing to the `message` topic in Vue
- Displaying current LED sign content
- Showing updates from other clients in real-time
- Handling multi-client synchronization

**[7:30-9:00] Testing the Full System**
- Controlling the sign from the web interface
- Demonstrating multi-client updates
- Power cycling, brightness adjustment, message changes
- Showing real-time sync across clients

**[9:00-10:00] Wrap-up**
- What we accomplished: Full-stack IoT application with multi-client support
- Real-world applications: digital signage, smart home controls, IoT dashboards
- Why Harper's built-in MQTT broker simplifies IoT development
- Next steps: Adding more devices, authentication, message history

---

## Key Learning Outcome

✓ **Build a full-stack IoT control system with real-time synchronization** — Learn to create a Vue.js application that controls physical hardware through Harper's built-in MQTT broker, implementing both publish and subscribe patterns for multi-client real-time updates.

---

## Resources & Links

**Documentation:**
- [Harper MQTT API](https://harper.example.com/docs/mqtt)
- [MQTT Protocol Overview](https://mqtt.org/)
- [Vue.js Documentation](https://vuejs.org/)

**Tools Used:**
- Harper CLI (with built-in MQTT broker)
- Vue.js
- LED sign with MQTT client capability
- MQTT testing tools (for initial setup)

---

## Prerequisites

- Harper instance with MQTT broker enabled
- LED sign with MQTT client support (or similar IoT device)
- Basic understanding of Vue.js
- Understanding of asynchronous JavaScript and event-driven architecture
- Familiarity with pub/sub messaging patterns (helpful but not required)

## Hardware Setup

**LED Sign Requirements:**
- MQTT client capability
- WiFi connectivity
- Configurable to connect to custom MQTT broker
- Support for subscribing to topics

**MQTT Topics:**
- `led/power` - Controls on/off state (payload: "on" or "off")
- `led/brightness` - Controls display brightness (payload: 0-100)
- `led/message` - Controls displayed text (payload: string)

## Demo Flow

1. Configure LED sign to connect to Harper's MQTT broker
2. Deploy Vue.js control panel to Harper
3. Open control panel in browser
4. Toggle power, adjust brightness, send messages
5. Open second browser/device to demonstrate multi-client sync
6. Show messages appearing on LED sign in real-time
7. Update from second client and watch first client update automatically
