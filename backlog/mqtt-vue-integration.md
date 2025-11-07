# MQTT Integration with Vue.js

# MQTT Integration with Vue.js

**Duration:** ~10 minutes • **Difficulty:** Intermediate

---

## Overview

This episode brings IoT into the mix by leveraging Harper's built-in MQTT functionality with a Vue.js app. You'll learn how to use Harper's native MQTT support to send messages from your web application to control a real device, bridging the gap between web development and hardware. By the end, you'll have a working example of browser-to-device communication without any additional libraries.

---

## Talk Track

**[0:00-0:30] Introduction**
- Quick recap of Vue.js app
- Today's focus: Adding MQTT to control devices
- Demo preview: Sending messages from browser to device

**[0:30-2:00] MQTT Basics & Harper's Built-in Support**
- What is MQTT and why use it for IoT
- Pub/sub pattern overview
- Harper's native MQTT functionality (no libraries needed!)

**[2:00-4:30] Setting Up the Vue.js App**
- Starting with a Vue.js app
- Accessing Harper's MQTT API
- Configuring MQTT connection through Harper

**[4:30-7:30] Building the Device Control Interface**
- Creating UI controls in Vue
- Using Harper's MQTT API to publish messages
- Handling connection states and errors

**[7:30-9:00] Testing with a Real Device**
- Connecting to the device through Harper
- Sending messages and observing device response
- Debugging tips and common issues

**[9:00-10:00] Wrap-up**
- What we accomplished: browser to device control
- Real-world applications of MQTT

---

## Key Learning Outcome

✓ **Send MQTT messages from a web app to control IoT devices** — Learn to use Harper's built-in MQTT support in a Vue.js application to communicate with hardware devices in real-time using the publish-subscribe pattern.

---

## Resources & Links

**Documentation:**
- [Harper MQTT API](https://harper.example.com/docs/mqtt)
- [MQTT Protocol Overview](https://mqtt.org/)
- [Vue.js Documentation](https://vuejs.org/)

**Tools Used:**
- Harper CLI (with built-in MQTT support)
- Vue.js
- IoT device with MQTT support

---

## Prerequisites

- Vue.js app deployed on Harper
- Access to an IoT device with MQTT support
- Basic understanding of asynchronous JavaScript
- Harper installed with MQTT support enabled
