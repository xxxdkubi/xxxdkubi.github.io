---
title: Git 实用技巧：日常开发中的救命操作
date: 2026-06-23
category: 技术
tags: ["Git", "版本控制", "工具"]
description: 整理一些日常开发中最常用的 Git 技巧，从撤销操作到分支管理，帮你少走弯路。
---

## 撤销操作

### 撤销最近的 commit（保留更改）

```bash
git reset --soft HEAD~1
```

### 撤销工作区的修改

```bash
git checkout -- filename
```

### 修改最近一次 commit 信息

```bash
git commit --amend -m "new message"
```

## 分支管理

### 创建并切换到新分支

```bash
git checkout -b feature/new-feature
```

### 删除本地分支

```bash
git branch -d branch-name
```

### 强制删除

```bash
git branch -D branch-name
```

## stash 救场

当你改到一半需要切分支时：

```bash
git stash           # 暂存
git stash pop       # 恢复
git stash list      # 查看暂存列表
git stash drop      # 删除暂存
```

## Cherry-pick

只想要某个 commit 到当前分支：

```bash
git cherry-pick <commit-hash>
```

> 熟练掌握 Git，能让你在团队协作中游刃有余。
