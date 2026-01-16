---
title: "YouTube doesn't let you categorize your subs... so I fixed it."
date: 2026-01-01
layout: post.njk
---

If you’re like me, your YouTube subscriptions are just one giant, impossible-to-navigate list. Gaming channels, tutorials, news, creators you actually care about — it’s all mixed together. There’s no folders, no categories, nothing to make sense of it. And that’s insane.

So I decided to fix it. Using a combination of [Notion](https://www.notion.com/), [Make.com](https://www.make.com/), and [Google Takeout](https://takeout.google.com/), I built a workflow to organize subscriptions into meaningful categories.

### Step 1: Export your subscriptions
Google Takeout lets you download all your YouTube data, including the list of channels you’re subscribed to. This gives you a structured CSV you can import anywhere. I'll have to 
explore Google Takeout more, until today, I didn't even know it existed.

### Step 2: Import into Notion
Once you have your CSV, you can import it into Notion as a database. Now you have rows for every channel, which you can tag, categorize, and even filter by type of content or interest.

### Step 3: Automate with Make
To keep the database updated automatically, I built a Make.com scenario that periodically syncs new subscriptions from YouTube into Notion. No more manual updates. Your categorized list stays current.

### Why this matters
This isn’t just a convenience hack — it’s a way to actually make YouTube usable when you follow dozens or hundreds of creators. It’s also an example of how combining no-code tools with a little ingenuity can solve everyday frustrations.

I’m planning to make this workflow available for anyone who wants it — and I’ll document it in detail in future posts. Stay tuned if you want to reclaim your subscriptions.