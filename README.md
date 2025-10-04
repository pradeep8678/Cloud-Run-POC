# 🚀 Cloud Run Memory-Based Scaling (POC)

This project is a Proof of Concept (POC) demonstrating how to **automate Google Cloud Run scaling based on memory utilization** — something Cloud Run does *not* handle natively.

Cloud Run automatically scales based on request load and CPU, but **it doesn’t scale when container memory usage increases**.  
This POC shows how to build an automation pipeline that detects high memory usage and triggers actions (like deploying a new revision with higher memory limits or adjusting instance counts).

---

## 🧩 What this project includes
- **Simple Node.js app** with a `/leak` endpoint that artificially increases memory usage for testing.
- **Dockerfile** for containerizing the app and deploying it to Cloud Run.
- **Cloud Monitoring setup** to track container memory metrics.
- **Alerting policy** that fires when memory usage exceeds a threshold.
- (Optional automation) **Cloud Function + Pub/Sub** that automatically scales Cloud Run service memory.

---

## 📊 POC Flow Overview
1. Deploy this app to **Google Cloud Run** using the GCP Console (GUI only, no CLI).  
2. Use **Cloud Monitoring** to create an alert based on memory utilization metrics.  
3. Connect the alert to an automation (e.g., Cloud Function) that updates the Cloud Run service memory allocation.  
4. Simulate high memory by hitting `/leak?mb=200` endpoint and observe scaling behavior.

---

## ⚙️ Endpoints
| Endpoint | Description | Example |
|-----------|--------------|---------|
| `/` | Basic health check | `https://<service-url>/` |
| `/mem` | Shows current memory usage of container | `https://<service-url>/mem` |
| `/leak?mb=100` | Allocates and retains X MB memory | `https://<service-url>/leak?mb=200` |

---

## 🧠 Key Learning
- Understand how Cloud Run scales (and its limitations regarding memory).
- Learn to use Cloud Monitoring metrics and alerts for automation.
- Build real-world cloud automation workflows with GUI tools.

---

## 🧰 Tech Stack
- **Node.js** (Express)
- **Docker**
- **Google Cloud Run**
- **Cloud Monitoring + Alerting**
- **Pub/Sub + Cloud Functions (for automation)**

---

## 📚 Author
**Pradeep Singh** — Cloud Engineering Enthusiast  
💡 *Exploring how to make Cloud Run smarter using automation.*

---

⭐ *If you find this useful, consider starring the repo to support learning projects like this!*
