---
title: "ICYMI: Alternative energy providers are a thing!"
description: Providers exist that enable you to not only benefit from variable conditions on the power grid at 30 minute intervals, but also to be paid for using power! Whodathunkit?
---

We recently switched our home electricity provider to Octopus, on the basis I wanted to support a company that's pursuing renewable energy. We moved away from EDF, whose energy mix still involved non-renewable sources. After moving, I discovered that they offer a tariff called 'Agile', which offers pricing that changes on a 30-minute basis throughout the day based on the conditions on the grid. What's more, is that you get notified of how the rates are going to change the day before, with all data available through an API, so it's possible to plan your usage for the next day. The automation enthusiast in me had all sorts of light bulbs going off upon discovering this, so I opted to change tariff immediately and ask questions later.

## Tell me more!

Typically, with a regular energy provider, you sign up to a contract that has fixed prices. They let you know in advance how much they're going to charge you per day for the connection (the standing charge) along with how much they're going to charge you per unit. Some tariffs have a different unit price at night or for certain times of the day, but in general this is still fixed for a long period of time. This has long been marketed under the guise of being 'predictable' and offering customers a consistent and reliable monthly charge, but of course that only applies if your usage remains consistent too. With the recent significant changes in energy costs, prices have been changing drastically, with not much you can do about it.

On the face of it, a tariff like Agile looks like it could be more expensive, and it certainly can. At the time of writing, an average cost for a unit (1 kWh) of power in the UK is around 30p. With Agile, during some peak times, I have already seen the price spike to 70p, and it can go as high as 100p. However, if you have the freedom to adjust your usage to avoid these spikes and focus on the lows instead (I've already experienced down to -8p — yes, they pay you to use it), suddenly you're enabled to get a much better deal for yourself.

Energy providers are subject to these changes on a daily basis, but in the past have simply averaged them out, applied a margin to ensure profitability, and passed that average on to the consumer. This might be a good deal, but just as likely as it is a good deal for some, it's likely a bad deal for others, hence average.

The Agile tariff enables you to reject the provided average and take control of the price you pay in to your own hands, accepting the risk that you might pay 100p a unit for the reward of in some cases receiving free electricity or being paid to use it.

## How does it work?

At around 16:00 each day, the half-hourly unit rates for the following day up until 23:00 are published. These rates are available on the Agile portal and accessible programmatically via the Octopus API. Incidentally, the portal is publicly viewable and also shows history so you can get an idea of how the tariff might work for you before signing up.

[![A screenshot of the data presented in my Home Assistant installation](/assets/images/articles/icymi-alternative-energy-providers/agile-pricing.jpg)](/assets/images/articles/icymi-alternative-energy-providers/agile-pricing.jpg)

The data shows you how much you'll be charged for each unit of electricity you use during that 30-minute period, and thus you can plan or schedule things accordingly.

These kinds of tariffs do necessitate you having a smart meter installed and running, as of course the meter needs to be able to report how much power was used in each half-hour time chunk so you can be billed correctly for your usage.

## What can I use it for?

On a basic level, the first thing you can do once you have the data available is to actively shift your usage out of the expensive times and into the cheaper (or free/below zero!) times.

In our house, we work on the basis that if the power costs the same as or more than it does on a regular tariff, we only use power for the things that are completely necessary at that time. If we're working, we're not going to stop working, but we might choose to do laundry or run the dishwasher later. If it's nighttime, and we need to see things using our eyes, we probably aren't going to sit in the dark, but we might opt to wait a bit before cooking a 3-course dinner on an electric stove.

When you have a home automation system (sidebar: [Why You Should Care About Home Automation](/articles/why-you-should-care-about-home-automation)) running, you can start to take advantage of the benefits in a fully automated way. Power becomes really expensive? Turn things off automatically. Power is free/paid? Turn things on!

Remember, as the pricing data is provided in advance, you can schedule things to run in advance, too. With the excellent [Home Assistant Octopus integration](https://github.com/BottlecapDave/HomeAssistant-OctopusEnergy), you can have it analyse the data and find the cheapest times of day to run an appliance. For example, you need 3.5 hours to run your dishwasher overnight? The integration will look at the data provided about the costs from Octopus and figure out the lowest average price to fit in that 3.5 hour slot. I think this is awesome, and gives an opportunity to actually make an appliance have some kind of 'smarts', in that it can know when the best time is for it to run and turn itself on.

## Keeping an eye on it

Of course, now you have this data available, you need it visible in order to know what to do (or not to do). If the power is currently 100p a unit (it hasn't been that high for us, yet) I don't want to use too much!

[![My mini dashboard based on a Raspberry Pi 3A and balenaDash](/assets/images/articles/icymi-alternative-energy-providers/dashboard.jpg)](/assets/images/articles/icymi-alternative-energy-providers/dashboard.jpg)

To solve for this I built a small Home Assistant dashboard that shows the current power price, and then set up a small display to show it in the main living area, but in the future I might simplify it further to just a coloured LED or something.

I also have (prior to this endeavour) full energy monitoring set up in Home Assistant, so I can see how much power we're using instantaneously and cumulative energy use over time. I guess some automations to alert or notify you if you turn on a power-hungry appliance during an expensive time period could be useful too — all totally possible now!

## One month later

When we left EDF, we were paying 28.52p a unit and 55.5p per day standing charge. In our first month using Agile, we averaged a price of 18.51p. The bill thankfully shows the average you achieved, as opposed to breaking down how much power fell into every 30 minute chunk throughout the last month.

[![An average bill from EDF](/assets/images/articles/icymi-alternative-energy-providers/timeline.jpg)](/assets/images/articles/icymi-alternative-energy-providers/timeline.jpg)

[![Our first result using Agile from Octopus](/assets/images/articles/icymi-alternative-energy-providers/bill.jpg)](/assets/images/articles/icymi-alternative-energy-providers/bill.jpg)

About 35% cheaper, but honestly it's worth it just for the fact we have control over the price we pay. If we want to use power at peak times, we pay more than average, otherwise we pay less — it's a good deal for us but I understand won't work for everyone, as the average, by definition, has to be better for some people and worse for others. So far the average is worse for us and we're better off now.

---

## Thoughts

I definitely recommend taking a look at the 'new generation' of utility companies that are doing cool stuff. Octopus have other interesting tariffs that may work better than Agile depending on your needs. I also originally discovered that this stuff was a thing via [Tibber](https://tibber.com/) who are doing it in other countries. Do you know any other companies doing similar? Have you had any good/bad experiences with this technology? Let me know in the comments and I'll see you on the next one. Cheers!
