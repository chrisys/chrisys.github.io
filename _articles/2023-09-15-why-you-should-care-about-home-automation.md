---
title: "Why You Should Care About Home Automation"
description: I think Home Automation is a great way to use technology to help with energy saving, cost awareness, convenience and more. Here's an introduction for you.
---

My aim here is to inspire you and arm you with some basic information needed to go and set up your own home automation system. I'm of the opinion that even a basic system is a great way to leverage technology to help make life easier and allow you to focus (some more of) your efforts on the more important things. We won't go into too much detail and keep it at a high level, just to get the brain in gear about what you can do without too much effort or expense. If you're already running a system maybe it'll give you some more ideas, otherwise skip this one and look out for more detailed stuff here in the future.

---

## An Introduction

[![A 1980s home automation system at work](/assets/images/articles/why-you-should-care-about-home-automation/old-system.jpg)](/assets/images/articles/why-you-should-care-about-home-automation/old-system.jpg)

The term 'Home Automation' likely makes the idea sound a lot more grand and exclusive than it really is. I think about the crude but functional automated dog feeder from Back To The Future (1985), or even a computerised assistant in your house that you could speak to, and some automated blinds, like in Iron Man (2008). It's been a feature of fictional movies for a long time but the reality today is that a lot of this sort of stuff is real and relatively accessible. To me, 15 years ago, it seemed like home automation was either very clunky and requiring a lot of knowledge to put together, or that of high end properties with bespoke installations from the ground up inaccessible to someone who simply wanted to add a little technological seasoning here and there. I recall working with large, plug-in modules, and having to write my own software to get them to do anything useful.

Today, when I say Home Automation, I mean simply the idea that you could have something taken care of automatically which you currently do manually. Unfortunately we're not at the point of loading the dishwasher or changing the bed, but we can feed the dog or open/close our blinds pretty easily. There's also the idea of adding extra control to things you still have to do manually to make it easier. This of course can encompass a huge variety of tasks, some requiring just a little effort to set up, and others requiring a lot more equipment and complexity to get going.

To get started with the basics today you don't need to make a large outlay, with entry level items priced around £10 or US$10 and there are some great free and open-source software packages that take care of the heavy lifting. There's a great community around this stuff that continues to grow and support more devices and functions day by day.

We'll explore some ideas to see if there's anything that resonates with you, then look at what sort of equipment you'd need to achieve that. In the future I hope to go into more step-by-step guides where necessary, but for now I'll just try to pique your interest and point you in the right direction.

## What you can do with it: some ideas

[![A basic home automation system is made up of inputs, some logic or process, and outputs](/assets/images/articles/why-you-should-care-about-home-automation/diagram.jpg)](/assets/images/articles/why-you-should-care-about-home-automation/diagram.jpg)

To give you the most flexibility, you need some inputs and outputs. A switch, button, sensor or window contact are some examples of inputs. Lights, heating control valves, fans, or appliances are all examples of outputs. Between the inputs and outputs sits a space for you to specify how you would like things to work. For example a motion sensor sends a trigger as an input, then you could choose to trigger lights and send a notification to your phone as an output. Fully customisable!

My personal approach is that any technology I add should be backward compatible with the analog way of doing it. For example, if I add connectivity to a thermostat or heating system, there should still be a button on the wall to set the temperature. If I add connectivity to a dishwasher and automate it to run overnight, there should still be a 'start' button on the front. I like the technology to be an invisible layer that adds to the experience rather than something that completely takes over and means I need to find my phone to do everything.

I've compiled a list of a few things that our system does below that will hopefully inspire you to consider setting up your own system. None of this stuff is particularly noteworthy, hard to do, or expensive; at this point it's more about being creative.

**Lighting**

OK let's start with the basics; lighting. One of the first things I did was set up our outdoor lighting in the front and in the back yard turned on at sunset and off at sunrise. Of course, being a computerised system, you can set your location and it will know when the sun sets and rises and can then turn your lights on and off accordingly, changing throughout the year. I set this up once about 4 years ago and haven't touched it since.

[![A connected (WiFi) relay module hiding behind a standard UK light switch](/assets/images/articles/why-you-should-care-about-home-automation/relay.jpg)](/assets/images/articles/why-you-should-care-about-home-automation/relay.jpg)

In some other rooms I've installed relay modules behind the light switches. These modules allow a traditional wall-mounted light switch to still function transparently, whilst providing connectivity and enabling automated control.

**Heating/Cooling**

For our heating system, we chose to use Tado thermostats. We have one of these in each room, which not only provides the backward-compatible human interface, but also provides a handy temperature and humidity reading. I'm not totally happy with these as although they function in terms of heating the house without an Internet connection, they require an Internet connection for connectivity to the automation system. It's on the todo list to improve this.

As for automation, and aside from standard thermostat functions, it allows for basic things such as not heating the house if you're not home. Setting up detailed schedules using a visual interface from a browser is simple, and of course the sensors provide readings for you to create other automations. One example of this is using the thermostat in the bathroom to detect a spike in humidity values (meaning someone probably showered), and then turning the heated towel rail on (via a connected relay) independently of the heating system to dry your towel after use.

**Security**

Simply for peace of mind, there are a lot of very easy to install and reasonably priced sensors available from brands such as Aqara and Sonoff. To use these you'll need the appropriate addition to your system to communicate with them (e.g. a USB Zigbee dongle), but it sounds a lot more complicated than it is.

Once you have a Zigbee interface your system is opened up to be able to easily add things like door and window sensors, moisture sensors (to detect leaks), motion sensors, temperature and humidity sensors, vibration sensors, air quality and probably more.

You can easily set up basic triggers if for example a door is opened. You could send a notification to your phone, or turn on the entry way light, or automatically take a picture with a camera to see who opened the door. This is all incredibly simple to set up and again, requires more creativity than it does technical implementation.

**Energy**

This is a very cool aspect that I've become more interested in recently, as it gives the chance to save some money. To start with, you need visibility. We have an Iammeter three phase energy monitor that provides accurate live readings and data about electricity usage. We use the three phases on the monitor to cover the house, the grid, and solar panel output. This means we can tell how energy is flowing from the panels, to the house and if any over-production is returning to the grid. This setup tells us how much energy we're using instantaneously and over time and how much our bill is going to be before we get it.

[![An idea of the information you can expect to see](/assets/images/articles/why-you-should-care-about-home-automation/energy.jpg)](/assets/images/articles/why-you-should-care-about-home-automation/energy.jpg)

Secondly, something that I've been experimenting with just in the past week is a product called Agile from Octopus Energy. This tariff allows the rate at which you're charged for electricity to fluctuate on a 30-min basis. Whilst on the surface this can appear risky — the rates can of course go higher than a standard fixed tariff — it gives you a lot of freedom. This information, which is published a day in advance, tells you when the cheapest electricity is going to be during the following day. That means you can, in a fully automated way, tell your appliances to start or turn on or off depending on how much the power costs. I'm already working on connecting our non-connected dishwasher and washing machine so they can start automatically whenever the rates are lowest.

**Phone apps**

An app running on your phone can provide some handy inputs, as well of course as providing a conduit for outputs in the form of push notifications.

The thing I find the most useful is using my phone as a means to let my system know if I'm home or not. This can enable you to change the behavior in useful ways. For example, if you have a motion sensor set up to send you a notification if it detects movement, it's handy to stop the notifications if you're home so you're not constantly causing them to be sent with your own movement.

You can utilise more precise location data in a similar way. Imagine drawing a circle round your home; you can then set inputs to trigger when you cross in or out of that circle. For example, automatically turning off any lights you may have left on, locking any doors you left unlocked, and telling the robot vacuum to clean the floor. Simultaneously, when returning you can tell the robot to stop cleaning giving it time to dock before you get there so you don't trip over it.

These kind of things sound a little extravagant when written down, but are very convenient and simple to set up providing you build your system in the right way. In a lot of cases you can add a lot of additional functionality for no cost other than a little time to configure it.

## I'm sold! Where do I start?

If you're interested in giving it a go, amazing! I can't ask for more than that from this post, and so here's a bit more specific information to point you in the right direction. As before, I'm going to keep this quite high level to give you an idea of what's required and what you might need.

A big problem with home automation is the fragmentation of the ecosystem. As you look around what you'll find is that every manufacturer and sometimes even every range of devices has its own app. You end up with a ton of different apps on your phone that all control different things and don't talk to each other; which is rubbish and not much use if the whole point is to be able to connect things together. There are a few different approaches to try to solve this issue, but I'm a big fan of [Home Assistant](https://www.home-assistant.io/). That's what I use and that's what I'm going to advocate for here as that's the system that I know best. The reason for that is that I believe that we should aim for everything that controls your home to be within your home. It doesn't make sense to have devices communicating outside the house to some unknown system on the Internet and then back again. I don't want things in my house to stop working if my Internet connection is down, just as I don't want third party systems I know nothing about to have control over physical devices in our house.

**Central Hub**

First, you're going to need some kind of central 'hub' that all your devices connect to, and where you can configure what things do what, and connect things together. This hub should be within your home to allow things to work without communicating outside, as I mentioned above. That's what Home Assistant does, but it's only the software component. You'll need a device to run it on, which is where something like a Raspberry Pi comes in. Home Assistant also have their 'Yellow' device — hardware that comes with everything pre-installed out of the box. I've never used one of these but the premise seems sound. In the future I hope to dig into the installation and setup of a hub in more detail but for now, check out the official installation guides for Home Assistant on Raspberry Pi. You could also check YouTube for installation and setup instructions. Once you've got it running, there are apps available for Android/iOS and you can access it from a web browser on any computer too.

**Devices**

No matter if you're connecting your existing appliances, electronics, lamps etc, it needs to work with your hub. This ties back to what I mentioned before about the ecosystem being very fragmented. Some manufacturers do a good job of making interoperability with others difficult, but a lot play nicely. Not only do I obviously prefer stuff that will integrate with Home Assistant, I prefer not to support companies and manufacturers that try to lock you in to their product line. Variety is absolutely necessary as one product range from one manufacturer almost certainly won't cover everything you need. Keep your options open!

If you do end up using Home Assistant, take a look at their integrations marketplace before purchasing anything. Check there to make sure the item you're interested in is supported (and maintained), and you'll have a much more fun time when it comes to setting it up.

**Connecting existing stuff**

You don't have to buy all new "smart" stuff to have fun with home automation, but you'll need a way to add connectivity to your device somehow. Be that WiFi, Zigbee, Z-Wave, BLE, LoRA or whatever (it's not important for the moment), our stuff needs to be able to communicate in a way other than walking over to them and pressing a button to tell them to do something. We need to be able to electronically or programmatically tell them what to do, and in the case of existing stuff, that usually comes in the form of some widget that you add.

This can be achieved by utilising things such as smart plugs, WiFi/Zigbee/other connected relays, or by projects such as ESPHome (there's another world of stuff to investigate there).

**New, connected stuff**

Of course, as an alternative to connecting existing stuff, you can look for stuff with connectivity built in whenever you need to purchase a new appliance. Something like a 'smart washing machine' might not make much sense on the face of it, but if it provides the functionality to trigger the start of a cycle, you can imagine loading the machine and having it automatically figure out when power is cheapest and/or has least CO2 impact before starting in order to save money.

You're essentially looking to secure optionality when it comes to these devices. Who knows what other components you'll add to your system that makes having a connected toaster useful (mild sarcasm), but it's nice to have the option. Just make sure you check to make sure it plays nicely with your central hub/system of choice — if it works with open source projects it's a good sign, although not a guarantee, that the interface is friendly. If a manufacturer is forcing their own app and blocking others, not so much.

**So… where do I start?**

In my opinion, start with a Raspberry Pi and follow one of the many guides to install Home Assistant. I personally deploy it using balenaCloud as it provides a free and easy way to set up remote access (necessary for things like the location-aware triggers I mentioned above). There are many ways to install and manage it though so go for whichever seems most convenient for you — just search on YouTube and there are loads of guides and ideas.

Once you've got it running, probably the easiest place to start is with one or two smart plugs as mentioned above. Even if your first adventure into home automation is not strictly automation, it's still fun to be able to control a couple of lights or appliances. You can control them remotely with your phone, set timers, and they'll be ready and waiting to be integrated more as you build up your system. What's more, if you get some with energy monitoring built in you can start to get some useful information out of them about your usage as well.

**Building gradually**

The key for me was building up gradually over time. I started out with some thermostats, and added a couple of lights, and gradually kept building things up to the point where I can start to connect things purely within Home Assistant with no extra hardware when I have an idea. I remember thinking it was barely worth the trouble at the beginning when I only had heating and a couple of lights, but I just kept gradually adding more things and making sure everything we added to the house was compatible where possible. Once you get enough inputs and outputs the number of combinations you can apply with the logic available between them really starts to increase explosively. Just make a start and build gradually — enjoy!

---

For those of you out there that already run a home automation system, are there any products you'd recommend to those just starting out? For those new to the concept, are there any ideas that come to mind that we could discuss in more detail? For the future I'm considering more specific and step-by-step guides, if there's anything you think I should cover to complement this article let me know. See you on the next one!
