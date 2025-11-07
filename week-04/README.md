# Week 04: Ingesting Data from BigQuery to Harper

**Published:** [Date TBD] • **Duration:** ~10 minutes • **Difficulty:** Intermediate

---

## 📺 Watch On

- **[YouTube](https://youtube.com/watch?v=VIDEO_ID)** — Primary platform
- **[Additional Platform]** — Coming soon

---

## Overview

This week we tackle a real-world data integration challenge: moving data from Google BigQuery into Harper. You'll learn the entire workflow from problem definition to verification, including generating synthetic test data, understanding BigQuery's structure, building an ingestor to pull data into Harper, and verifying the data is available for use. By the end, you'll understand how to bridge cloud data warehouses with Harper's fast, operational database.

---

## Talk Track

**[0:00-0:30] Introduction**
- The challenge: Moving data from BigQuery to Harper
- Why this matters: Combining analytical and operational data stores
- What we'll build today

**[0:30-2:00] Whiteboard Segment: Understanding the Problem**
- The data flow: BigQuery → Ingestor → Harper
- Key challenges: Authentication, schema mapping, incremental updates
- Architecture overview of our solution

**[2:00-3:30] Building a Synthetic Data Generator**
- Creating test data for BigQuery
- Pushing data to BigQuery for testing
- Setting up realistic scenarios

**[3:30-5:00] Exploring BigQuery**
- Viewing our test data in BigQuery
- Understanding the table structure
- Query patterns we'll need to replicate

**[5:00-7:30] Building the Ingestor**
- Setting up BigQuery client authentication
- Writing the data extraction logic
- Mapping BigQuery schema to Harper tables
- Handling data transformations

**[7:30-9:30] Testing the Ingestor & Verifying Data**
- Running the ingestor to pull data
- Querying Harper to verify the data
- Checking data integrity and completeness
- Performance considerations

**[9:30-10:00] Wrap-up**
- What we accomplished: Full data pipeline
- Real-world use cases for BigQuery → Harper
- Next steps and optimizations

---

## Key Learning Outcome

✓ **Build a complete data pipeline from BigQuery to Harper** — Learn to extract data from Google BigQuery, transform it, and load it into Harper, understanding the full workflow from synthetic data generation to verification.

---

## Timestamps

> *Will be added after video is published*

- `00:00` — Introduction
- `00:00` — Whiteboard: Understanding the Problem
- `00:00` — Building a Synthetic Data Generator
- `00:00` — Exploring BigQuery
- `00:00` — Building the Ingestor
- `00:00` — Testing & Verifying Data
- `00:00` — Wrap-up

---

## Resources & Links

**Documentation:**
- [Google BigQuery Documentation](https://cloud.google.com/bigquery/docs)
- [BigQuery Client Libraries](https://cloud.google.com/bigquery/docs/reference/libraries)
- [Harper Data Import Guide](https://docs.harperdb.io/)
- [Google Cloud Authentication](https://cloud.google.com/docs/authentication)

**Community:**
- [Discord Community](https://discord.gg/kfYmMTXc9b)
- [GitHub Repository](https://github.com/HarperFast/harper-learn)

**Tools Used:**
- Harper CLI
- Google Cloud SDK
- BigQuery
- Node.js (for ingestor and synthetic data generator)
- Python or Node.js BigQuery client library

---

## Prerequisites

- Completion of Week 03
- Google Cloud Platform account with BigQuery access
- Basic understanding of SQL and data structures
- Node.js installed locally
- Harper instance running (local or remote)
- Familiarity with API authentication patterns

---

## Discussion & Feedback

**Quick questions?** Join the [Discord](https://discord.gg/kfYmMTXc9b) for real-time help
**Episode feedback?** [Submit via GitHub](../../issues/new?template=feedback.yml)
**Topic suggestions?** [Request a topic](../../issues/new?template=topic-request.yml)

---

**Next Episode:** Week 05 — [Topic TBD]

---

<div align="center">

Subscribe on [YouTube](https://www.youtube.com/@harper-fast) • Join the [Discord](https://discord.gg/kfYmMTXc9b)

</div>
