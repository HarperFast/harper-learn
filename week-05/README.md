# Week 05: Building Harper Plugins - Deep Dive

**Published:** [Date TBD] • **Duration:** ~10 minutes • **Difficulty:** Intermediate to Advanced

---

## 📺 Watch On

- **[YouTube](https://youtube.com/watch?v=VIDEO_ID)** — Primary platform
- **[Additional Platform]** — Coming soon

---

## Overview

This week we dive deep into Harper's plugin system. You'll learn how to extend Harper's functionality by building custom plugins that can intercept requests, transform data, add custom routes, and integrate with external systems. We'll build a complete plugin from scratch and test it with a skeleton application, covering authentication middleware, request logging, and custom endpoints.

> **Special thanks to [Ethan Arrowood](https://github.com/Ethan-Arrowood)** for his excellent work designing and implementing Harper's extensible plugin architecture that makes all of this possible.

---

## Talk Track

**[0:00-0:30] Introduction**
- What are Harper plugins and why they matter
- Real-world use cases: auth, logging, data transformation
- What we'll build: A multi-feature plugin with a test app

**[0:30-2:30] Understanding Harper's Plugin Architecture**
- Plugin lifecycle: initialization, hooks, and teardown
- Available hooks: beforeRequest, afterRequest, onStart
- Plugin context and accessing Harper's internals
- File structure and best practices

**[2:30-4:30] Building the Plugin Foundation**
- Setting up the plugin structure
- Implementing the plugin entry point
- Registering hooks and handlers
- Configuration and environment variables

**[4:30-7:00] Adding Core Features**
- Request logging middleware
- Custom authentication logic
- Adding custom API endpoints
- Data transformation examples

**[7:00-9:00] Building the Test Application**
- Creating a skeleton app to test our plugin
- Loading and configuring the plugin
- Testing each plugin feature
- Debugging common issues

**[9:00-10:00] Wrap-up**
- What we built: A production-ready plugin pattern
- Best practices for plugin development
- Next steps: Publishing and sharing plugins
- Special thanks to Ethan Arrowood for his work on Harper's plugin system

---

## Key Learning Outcome

✓ **Master Harper plugin development** — Learn to build production-ready Harper plugins with custom middleware, authentication, logging, and custom endpoints, and test them with a complete skeleton application.

---

## Timestamps

> *Will be added after video is published*

- `00:00` — Introduction
- `00:30` — Harper's Plugin Architecture
- `02:30` — Building the Plugin Foundation
- `04:30` — Adding Core Features
- `07:00` — Building the Test Application
- `09:00` — Wrap-up

---

## Resources & Links

**Documentation:**
- [Harper Plugin API Documentation](https://docs.harperdb.io/docs/developers/custom-functions)
- [Harper Component Instances](https://docs.harperdb.io/docs/developers/components)
- [Harper Request Lifecycle](https://docs.harperdb.io/docs/developers/request-lifecycle)

**Community:**
- [Discord Community](https://discord.gg/kfYmMTXc9b)
- [GitHub Repository](https://github.com/HarperFast/harper-learn)

**Tools Used:**
- Harper CLI
- Node.js & npm
- ESM modules
- curl or Postman for testing

**Example Code:**
- [plugin/](plugin/) — Complete plugin implementation
- [skeleton-app/](skeleton-app/) — Test application

---

## Prerequisites

- Completion of Week 04
- Understanding of JavaScript/Node.js modules
- Familiarity with middleware patterns
- Basic understanding of HTTP request/response cycle
- Harper instance running locally

---

## Discussion & Feedback

**Quick questions?** Join the [Discord](https://discord.gg/89sbtZTd) for real-time help
**Episode feedback?** [Submit via GitHub](../../issues/new?template=feedback.yml)
**Topic suggestions?** [Request a topic](../../issues/new?template=topic-request.yml)

---

**Next Episode:** Week 06 — [Topic TBD]

---

<div align="center">

Subscribe on [YouTube](https://www.youtube.com/@harper-fast) • Join the [Discord](https://discord.gg/89sbtZTd)

</div>
