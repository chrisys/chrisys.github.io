---
title: "Reducing Battery Waste: Modifying Tado Thermostats"
description: Why am I repeatedly replacing batteries in devices that have access to a power supply? Let's fix it.
---

I really despise replacing batteries. I don't care if the batteries last 3 months, 6 months, or a year, or maybe even more. They're still probably going to run out at a moment in time when it's a pain to replace them. That and it's another thing to buy and recycle; rechargeable cells are sometimes an option and I do use them where possible but if it's a device that's permanently fixed somewhere, I'd much rather do the work to give it a supply and forget about it.

This story and guide isn't so much intended for you to reproduce it, as I'm aware I had the luxury of being able to build a system into a house while it was being renovated, and as such was able to install plenty of cabling to afford me the freedom to do it later. This isn't always possible in a retrofit, however, I do hope it serves as an inspiration to find solutions to those annoying little things. Of course, if it works for your situation, by all means give it a go and let me know how it works for you!

## Backstory

When I set up the heating system in our house, a very much DIY affair, I opted to use Tado thermostats (#notsponsored). I chose these because even though I knew I'd end up automating things with Home Assistant, I wanted the technology to be just as accessible as an analog system. It should still be possible to walk into a room using legs and feet and adjust the temperature on the wall in that room using hands and eyes. I don't want to have to find my phone for everything. That meant finding a means for someone to see and modify a temperature setting. Combined with the need for each room to have a temperature sensor (in order to provide feedback to the heating system), it made sense to use an existing product, should one be available.

The Tado thermostat fit the need in that it provides a temperature and humidity reading, a relay contact output for the heat control and an API to allow other software to connect and get the data (e.g. Home Assistant). As a bonus they also provide a nice looking, stealth LED matrix display that shows you the current temperature and setting. They communicate wirelessly with a wired ethernet dongle that connects to your network and gets them online. Do I think it makes sense that my thermostats need to be online to report temperature to Home Assistant running in the same house — absolutely not, it's utter nonsense, but that's a battle for another day.

The downside we'll focus on for now is the requirement to use 3 AAA batteries per thermostat. We have 5 thermostats in the house, so that's 15 AAA batteries for the system.

## The Annoyance

When all the batteries in the system are fresh, it's happy days. Everything stays connected, everything works as it should. It's when the batteries start to drain that the problems creep in.

I was finding that one thermostat of the 5, the furthest away from the base station (is this a coincidence?), would drain quicker than the others. When the batteries in this unit started aging, and even before receiving a 'low battery' warning in the app, the connectivity would start to become flaky. It would occasionally drop connectivity and need rebooting (by removing & replacing the batteries) in order to restore it. This is mildly annoying as it would fail silently and we'd only notice once it got cold and there was no heating in that room.

Despite not receiving a notification about low batteries from the app, replacing the batteries restores order and everything works well again. This cycle repeated itself a few times, sometimes whilst we were travelling, defeating the functionality where we could control the heating remotely and prevent the house getting too cold & damp. It reached the point where we were actively replacing "good" batteries before we left to ensure we weren't left in a situation where the thermostat was offline and we weren't around to reboot it. Having searched online, it turned out that this wasn't a completely isolated incident.

The frequency of issues with this one particular 'stat, coupled with 4 others that also needed replacement batteries (at less frequent intervals), prompted me to come up with a solution and replace the batteries once and for all.

## The Solution

As mentioned above, I had the luxury of doing my own renovation, and so had previously installed ethernet cabling to every thermostat — at the point of installation I didn't know what solution we were going to employ, so I figured some simple ethernet cabling afforded the most optionality in the future.

Although the Tado thermostats communicate wirelessly for their 'smarts', they have terminals on the back of them with a relay inside, so they can interface with typical heating systems and be a direct replacement for old, bimetallic-strip-based thermostats. I connected the relay contact outputs to two pairs of the ethernet cable and used this as input to Home Assistant. This means that even if the Internet/network connection is down, the 'stats are still able to control the heating system and respond to inputs given directly to them by the touch controls. As long as their batteries don't go flat.

Ethernet cables have 4 pairs of conductors, and I was only using 2 for the thermostat output, so this left me 2 spare pairs. I figured I could just feed a 4.5V supply down one of the spare pairs — I just had to work out a way to connect it into the back of the Tado. Fortunately, the Tado has other connections that are unused in my setup!

[![From the Tado manual — detailing the use of the 3 terminals to the right for analog boiler control](/assets/images/articles/reducing-battery-waste/manual.jpg)](/assets/images/articles/reducing-battery-waste/manual.jpg)

As pictured above, the Tado units have the facility for analog (using the 3 rightmost terminals) or alternatively, digital control (using the 2 rightmost terminals), but I'm just using the standard relay contacts (the 3 leftmost terminals) in my setup.

This gave me the idea — I could use these terminals to connect another pair from the ethernet cable and feed in the 4.5V. I noticed in the manual that one 'official' use case for these pins involved applying a 24V supply, so I took the gamble that applying 4.5V wasn't going to harm anything.

[![The Tado wall-mounted backplate — highlighted in blue is the pair from the ethernet cable feeding 4.5V](/assets/images/articles/reducing-battery-waste/backplate.jpg)](/assets/images/articles/reducing-battery-waste/backplate.jpg)

This setup gave me a nice way to make the connection into the thermostat unit, but of course these terminals aren't used to power the device — simply applying 4.5V here doesn't power up the thermostat. I needed to make one further modification on the inside.

[![The inside of the Tado thermostat — the (now disconnected) battery connection in yellow, my new connection in blue](/assets/images/articles/reducing-battery-waste/inside.jpg)](/assets/images/articles/reducing-battery-waste/inside.jpg)

Upon opening the unit I found that the batteries were connected via a removable connector (highlighted in yellow above), which I believe is a JST-ZH (1.5mm pitch). I already had some of these connectors with leads left over from another project. This made it very trivial to solder one end onto the +/- interface pins that correspond to where the ethernet pair was connected on the backplate, and then plug the other end into the battery supply (highlighted in blue, above).

With that, all that was left was to connect a 4.5V power supply (3x 1.5V AA battery equivalent) to the other end of the ethernet cable, making sure to observe polarity all the way through. I used an adjustable DC-DC converter to step down 12V to 4.5V. You could also use a dedicated 4.5V PSU.

## The Result

Since performing this modification I've had no issues with dropped connectivity, and of course, no batteries to replace. It's very tidy, completely invisible, and completely reversible. Even if you take the thermostat off the wall you can't tell anything has been modified, other than that it mysteriously works fine without any batteries in it.

I am sure it voids the warranty and recommend exercising caution if you intend to do this yourself. Maybe in the future Tado could offer a permanent power option — it doesn't seem like it would be that hard to do.

[![The final result](/assets/images/articles/reducing-battery-waste/result.jpg)](/assets/images/articles/reducing-battery-waste/result.jpg)

I am very pleased with the outcome! 10/10 would do again, and have since done the same modification to all 5 of our 'stats.

Is this overkill? Potentially. Is it worth it to be freed from the awareness that there's some ticking clock that's going to place a demand on you for your attention at some random point in the future? Absolutely. Even if that's a bit dramatic, I'm very happy with how this turned out. I'm very happy that I don't need to maintain a stock of AAA batteries ready to go, and that I don't have to worry that at some point my heating is going to randomly stop working until I give it attention.

---

Maybe this inspires you to delete some batteries from something. Maybe not. Either way, thanks for reading.
