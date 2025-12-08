# Week 05: Local Harper Development - Zero to Deployed

**Published:** [Date TBD] • **Duration:** ~10 minutes • **Difficulty:** Beginner to Intermediate

---

## 📺 Watch On

- **[YouTube](https://youtube.com/watch?v=VIDEO_ID)** — Primary platform
- **[Additional Platform]** — Coming soon

---

## Overview

This episode takes you from nothing to a complete local Harper development workflow. You'll learn how to use Docker Compose to run Harper locally (both single instance and clustered), clone and deploy a real application template, and verify everything works. By the end, you'll understand the complete development workflow from zero to deployed application on Harper—whether you're brand new to Harper or have been following along from Week 01.

---

## Talk Track

**[0:00-1:00] Introduction**
- Why local development matters: fast iteration, no cloud costs, learn safely
- What we're building: Two repositories working together
- What you'll accomplish: Deploy the same app to single instance, then to a 3-node cluster

**[1:00-3:30] Getting the Infrastructure Repository**
- Navigate to [harper-getting-started](https://github.com/irjudson/harper-getting-started)
- Clone the repository
- Quick tour of the repo structure:
  - `docker-compose-single.yml` - Single Harper instance
  - `docker-compose-cluster.yml` - 3-node cluster
  - `docker-compose-grafana.yml` - Performance monitoring (future episode)

**[3:30-5:00] Launching Single Instance**
- Run `docker-compose -f docker-compose-single.yml up`
- Watch Harper start up
- Verify it's running and ready for deployment
- Explain ports, volumes, and configuration

**[5:00-6:30] Getting and Building the Application**
- Navigate to [application-template](https://github.com/HarperFast/application-template)
- Clone the repository
- Quick tour of the template structure
- Build the application

**[6:30-7:30] Deploying to Single Instance**
- Deploy the built application to the running single instance
- Verify deployment succeeded
- Test the application and show it working

**[7:30-8:30] Scaling to a Cluster**
- Tear down the single instance: `docker-compose -f docker-compose-single.yml down`
- Stand up the 3-node cluster: `docker-compose -f docker-compose-cluster.yml up`
- Watch the cluster form

**[8:30-9:30] Deploying to the Cluster**
- Deploy the same application to the cluster
- Verify deployment across nodes
- Test the application running on the cluster
- Show it working the same way

**[9:30-10:00] Wrap-up**
- What we built: Complete local development workflow
- Single instance for quick iteration, cluster for testing distributed scenarios
- Next steps: Grafana monitoring (future episode), building your own applications
- You now have everything you need to develop Harper applications locally

---

## Key Learning Outcome

✓ **Master the complete Harper development workflow** — From zero to deployed application on both single instance and clustered Harper environments using Docker, with real application templates ready for your own development.

---

## Timestamps

> *Will be added after video is published*

- `00:00` — Introduction
- `01:00` — Getting the Infrastructure Repository
- `03:30` — Launching Single Instance
- `05:00` — Getting and Building the Application
- `06:30` — Deploying to Single Instance
- `07:30` — Scaling to a Cluster
- `08:30` — Deploying to the Cluster
- `09:30` — Wrap-up

---

## Resources & Links

**Repositories:**
- [harper-getting-started](https://github.com/irjudson/harper-getting-started) — Docker infrastructure for local Harper development
- [application-template](https://github.com/HarperFast/application-template) — Starter application template for Harper

**Documentation:**
- [Harper Official Documentation](https://docs.harperdb.io/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

**Community:**
- [Discord Community](https://discord.gg/kfYmMTXc9b)
- [GitHub Repository](https://github.com/HarperFast/harper-learn)

**Tools Used:**
- Docker & Docker Compose
- Git
- Harper CLI

---

## Prerequisites

- Docker installed and running
- Git installed
- Basic command-line familiarity
- No prior Harper experience required (but Weeks 01-04 provide helpful context)

---

## Discussion & Feedback

**Quick questions?** Join the [Discord](https://discord.gg/89sbtZTd) for real-time help
**Episode feedback?** [Submit via GitHub](../../issues/new?template=feedback.yml)
**Topic suggestions?** [Request a topic](../../issues/new?template=topic-request.yml)

---

**Next Episode:** Week 06 — Building Harper Plugins - Deep Dive

---

<div align="center">

Subscribe on [YouTube](https://www.youtube.com/@harper-fast) • Join the [Discord](https://discord.gg/89sbtZTd)

</div>
