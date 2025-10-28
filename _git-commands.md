# 🧰 Basic Git Commands Cheat Sheet

## 📦 Setup & Configuration
| Command | Description |
|----------|-------------|
| `git config --global user.name "Your Name"` | Set your username |
| `git config --global user.email "you@example.com"` | Set your email address |
---

## 🏗️ Creating Repositories
| Command | Description |
|----------|-------------|
| `git init` | Initialize a new local repository |
| `git clone <repo-url>` | Clone an existing repository |

---

## 📁 Basic Snapshotting
| Command | Description |
|----------|-------------|
| `git status` | Show the status of changes |
| `git add <file>` | Add a file to the staging area |
| `git add .` | Add all files to staging |
| `git commit -m "message"` | Commit changes with a message |

---

## 🌿 Branching & Merging
| Command | Description |
|----------|-------------|
| `git branch` | List all branches |
| `git branch <name>` | Create a new branch |
| `git checkout <name>` | Switch to a branch |
| `git branch -d <name>` | Delete a branch |
| `git branch -M <name>` | Rename a branch |
| `git checkout -b <name>` | Create a branch and switch to it |

---

## 🚀 Working with Remotes
| Command | Description |
|----------|-------------|
| `git remote -v` | List remote repositories |
| `git remote add origin <url>` | Add a new remote repository |
| `git push -u origin <branch>` | Push changes to remote |
| `git pull` | Fetch and merge changes from remote |
| `git fetch` | Fetch changes without merging |
| `git fetch --all` | Fetch changes without merging from all branches |

---

## 🕓 Undoing Changes
| Command | Description |
|----------|-------------|
| `git restore <file>` | Restore a file to the last commit (modern syntax) |
| `git reset <file>` | Unstage a file |

---

## 🧭 Logs & History
| Command | Description |
|----------|-------------|
| `git log` | Show commit history |

---

📘 **Tip:** Use `git --help` or `git <command> --help` to get detailed documentation for any Git command.
