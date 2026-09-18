---
title: "Why I still build things as a CIO"
date: "2025-09-23"
updated: "2026-09-18"
summary: "Small builds keep me close to the practical work. The useful lessons are often in testing, integration and handover rather than the demo."
tags: ["Delivery", "Leadership", "Experiments"]
published: true
---

I still like building things. A small application, a workflow or an integration can teach me something that a product presentation will not.

In a leadership role, it is easy to spend most of your time looking at technology through roadmaps, budgets and status reports. Those views are necessary. They also leave out a lot of the friction involved in getting something to work.

Building helps me stay close to that friction. It reminds me that a seemingly small change can involve awkward permissions, inconsistent data or a dependency that behaves differently from its documentation.

The point is not that a CIO should write every application. I should not become the person the team has to wait for. The value is in keeping enough practical understanding to ask better questions, make better trade-offs and recognise where the work is being underestimated.

## Keep the experiment small enough to finish

A side project becomes much less useful when it turns into a second job with an endless backlog. I prefer a clear question that a small build can answer.

Can this workflow remove a repeated manual step? Can two systems exchange the information we need? Can a user understand the result without someone explaining the interface?

Those questions lead to different experiments. A technical spike might use a minimal interface. A usability test might use a prototype with very little behind it. Neither needs to pretend to be a complete product.

Write down what would make you stop. If an existing tool already does the job, or the required access is unavailable, that can be a useful conclusion. Finishing an experiment doesn’t always mean continuing the build.

Keep personal experiments separate from organisational systems and information. Use synthetic or properly authorised test data. A learning exercise is not a reason to copy production data into a convenient environment.

## Follow one task all the way through

The most misleading demo is one that stops just before the difficult part.

Consider a hypothetical document tool. Uploading a file and showing a progress message proves the interface accepted a file. It doesn’t prove that processing finished, that the output is correct or that a user can retrieve it later.

Follow the whole journey: upload, processing, result, review, export and reopening the saved work. Check what happens when a file is empty, unsupported or larger than expected. Check the message a user sees when the processing service is unavailable.

I find this a useful way to review any build. Ask for the final outcome, not just the next screen. “The request was accepted” and “the work was completed” are different states, and an interface should make that clear.

## Integration work is often where the lesson sits

Two products having APIs doesn’t mean they fit together cleanly. The interesting work is often in the meaning of the data and the behaviour around a failure.

Imagine sending approved records from one system to another. What identifies the same record on both sides? Which system owns a correction? What happens when an update arrives twice, or one step succeeds and the next fails?

I’d work through those questions before worrying about how impressive the integration looks. A useful prototype might simply show that a repeated request doesn’t create a duplicate and that an interrupted transfer can be resumed safely.

The practical output is a small set of agreements: identifiers, ownership, validation, retry behaviour and a way to reconcile the two systems. These are good questions to bring into a vendor discussion too.

## Take the second user seriously

A tool built for yourself benefits from context that is invisible in the interface. You know which button is safe, what a field expects and what the error message really means.

Someone else doesn’t have that knowledge. Watching another person use a prototype can expose assumptions much faster than adding more features.

For a simple test, give them the task rather than a walkthrough. Let them try it. Note where they pause, where they expect feedback and where they interpret a result differently from you.

That’s not a test of the person. It’s a test of whether the tool explains itself. If using it successfully requires the builder to sit beside every user, there is more work to do.

## A working prototype is not a supported service

I think this is one of the most useful lessons a small build can teach a leader. Getting the feature to work is only part of taking responsibility for it.

A service needs an owner, access management, somewhere to report problems and a way to recover from failure. It may need backups, monitoring, a change process and documentation that someone other than the builder can use.

Those needs should be proportionate to the tool. They should not be invisible. Even a small automation can become important when people stop doing the old manual process because they trust it to run.

Before moving beyond an experiment, I’d ask:

- Who notices if it stops working?
- Can someone tell what completed and what did not?
- How do we recover without duplicating or losing work?
- Can another person change or operate it?
- What happens if we decide to retire it?

The answers are part of the delivery, not optional extras after launch.

## Let building improve your leadership, not replace it

Hands-on work can make it easier to empathise with a team. It can also become a trap if the leader keeps stepping in to solve everything personally.

The useful habit is bringing what you learn back as better questions. Where is the uncertainty? What needs a prototype before we estimate it? Is the team being asked to promise an outcome before a dependency has been tested?

Give people room to choose their approach. Your prototype is evidence about one possibility, not proof that everyone else should build it your way. The team may have constraints you did not encounter in a small experiment.

I also try to distinguish enjoyment from business value. A technology can be interesting to work with and still be the wrong choice for the organisation. The fact that I can build something is not, by itself, a reason to build it.

## Keep the useful notes

At the end of a small project, a short record is enough: the question, what was tried, what worked, what failed and what would need to change before anyone relied on it.

That’s more useful than a screenshot of the successful path. It gives the next decision some context and makes it easier to explain why an idea should progress, change direction or stop.

For me, staying hands-on is a way to keep technology leadership connected to the actual work. It helps me see the gap between an attractive idea and a tool people can use, maintain and trust.
