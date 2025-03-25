const e=`# 100% \u624B\u52A8\u9ED1\u5BA2\u653B\u51FB\uFF08\u751A\u81F3\u6CA1\u6709\u4F7F\u7528 Kali \u548C Burp\uFF09\u5982\u4F55\u5BFC\u81F4 YesWeHack \u51FA\u73B0 2 \u4E2A\u4E2D\u7B49\u6F0F\u6D1E | \u4F5C\u8005\uFF1AManan Sanghvi | Medium

Created: November 21, 2024 8:32 AM
URL: https://medium.com/@manan_sanghvi/how-100-manual-hacking-without-even-kali-and-burp-led-to-2-medium-vulnerabilities-on-yeswehack-bbda00fcd84e
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): SRC_Bounty_\u8D4F\u91D1

# How 100% Manual Hacking (Without Even Kali And Burp) Led To 2 Medium Vulnerabilities On YesWeHack

![https://miro.medium.com/v2/resize:fill:88:88/1*Fo0Uo2LPPx3TzDVZ1ihUzw.jpeg](https://miro.medium.com/v2/resize:fill:88:88/1*Fo0Uo2LPPx3TzDVZ1ihUzw.jpeg)

[Manan Sanghvi](https://medium.com/@manan_sanghvi?source=post_page---byline--bbda00fcd84e--------------------------------)

\xB7

[Follow](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fuser%2F3230cc49787e&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40manan_sanghvi%2Fhow-100-manual-hacking-without-even-kali-and-burp-led-to-2-medium-vulnerabilities-on-yeswehack-bbda00fcd84e&user=Manan+Sanghvi&userId=3230cc49787e&source=post_page-3230cc49787e--byline--bbda00fcd84e---------------------post_header-----------)

4 min read

\xB7

Sep 4, 2024

Hello Folks, and welcome back! I\u2019m Manan Sanghvi. I\u2019m excited to share another Write-Up with you today.

![https://miro.medium.com/v2/resize:fit:700/1*hlgMtkcKXE4st15cpVjYFQ.jpeg](https://miro.medium.com/v2/resize:fit:700/1*hlgMtkcKXE4st15cpVjYFQ.jpeg)

If you\u2019re a beginner, this Write-Up is perfect for you. You\u2019ll learn something new about how to perform good reconnaissance through Google Dorking .

Before that, if you haven\u2019t read my previous write-ups, I highly recommend checking them out. You\u2019ll find valuable insights and experiences that can help you on your journey.

For those who haven\u2019t seen it yet, my first write-up is titled: \u201C**In under age (<18), How I Hacked Multi- Billion-Dollar-Corp and got first 4 fig. $2600 Bounty!**\u201D Make sure to give it a read \u2014 it\u2019s an exciting story that marked the beginning of my journey in hacking.

So, back to the topic. I was hacking a very large target with numerous subdomains and services in scope for hacking on **YesWeHack**. Although this is a public program, I won\u2019t be disclosing the name of the program.

I started by looking for subdomains for \`*.target.com\` using Google Dorking. My approach is a bit unique compared to what most people do. Typically, people might search like this: \`site:*.target.com\` or \`site:*.*.*.target.com\` (especially for larger scopes). These mathods are also good but I combine everything and try a different type of dorks:

> site:*<*.target.*
> 
> 
> ***site:*<-*.target.****
> 
> ***site:*>*.target.****
> 
> ***site:*->*.target.****
> 
> ***site:*<->*.target.****
> 

In Normal approach you can see that

![https://miro.medium.com/v2/resize:fit:700/1*38GntkvE8ZlWxSxjOKVWgg.png](https://miro.medium.com/v2/resize:fit:700/1*38GntkvE8ZlWxSxjOKVWgg.png)

And in my approach:

![https://miro.medium.com/v2/resize:fit:700/1*EQpRFlJUbSlecJhiD8iyLQ.png](https://miro.medium.com/v2/resize:fit:700/1*EQpRFlJUbSlecJhiD8iyLQ.png)

You can clearly see some small differences in those dorks. To find juicy subdomains, I used a specific dorks on that target, which looked something like this:

> site:*<*.target.com intext:"login" | intitle:"login" | inurl:"login" | intext:"username" | intitle:"username" | inurl:"username" | intext:"password" | intitle:"password" | inurl:"password"
> 

You will able see the some different subdomains which has login panels. Now, In that target I found 2 juicy subdomains which has search bar on home page.

Now, everyone asks me where and how I start looking for XSS vulnerabilities, so here\u2019s my process: I first combine various tags and special characters (\`abc ' " } < > ; // # -\`) into a single search to understand how the web application responds to each one. For example, I might input something like this:

> abc\u2019 \u201C ><>#; \u2014 \u2014
> 

This is always my first step when testing for XSS. The goal is to see how the website handles different characters and whether it uses any Web Application Firewall (WAF) or encoding that might interfere with the injection. In this case, I put my payload in search bar on both subdomains and I found that there was nothing in place that could block my attempts. This is output I got In one subdomain:

![https://miro.medium.com/v2/resize:fit:700/1*OKpYabYTXjh6RDjEL0Qpog.png](https://miro.medium.com/v2/resize:fit:700/1*OKpYabYTXjh6RDjEL0Qpog.png)

And in second subdomain:

![https://miro.medium.com/v2/resize:fit:700/1*iH8x4w6r_dHDy2A6KAJ00A.png](https://miro.medium.com/v2/resize:fit:700/1*iH8x4w6r_dHDy2A6KAJ00A.png)

You can see that there is not output encoding. So I think I should spend some more time on this and I created custom payload

> abc\u2019\u201D><><img src=1 onerror=alert(document.cookie)>
> 

This is my all-time favorite payload for testing XSS. I\u2019ve found numerous vulnerabilities using just this one line of code.

Here is a Pop Up I Got:

![https://miro.medium.com/v2/resize:fit:700/1*xkkbkc9NQsTX7ox_e8cOUQ.jpeg](https://miro.medium.com/v2/resize:fit:700/1*xkkbkc9NQsTX7ox_e8cOUQ.jpeg)

![https://miro.medium.com/v2/resize:fit:700/1*7Nwu5ElDd9wPD4UArVXsgg.jpeg](https://miro.medium.com/v2/resize:fit:700/1*7Nwu5ElDd9wPD4UArVXsgg.jpeg)

Then I reported to **YesWeHack** and It was Accepted:

![https://miro.medium.com/v2/resize:fit:700/1*mDc2zN9nTCW4k1Vzlx1c2g.jpeg](https://miro.medium.com/v2/resize:fit:700/1*mDc2zN9nTCW4k1Vzlx1c2g.jpeg)

![https://miro.medium.com/v2/resize:fit:700/1*xqs908F0LnNL5nvoMIWqvQ.jpeg](https://miro.medium.com/v2/resize:fit:700/1*xqs908F0LnNL5nvoMIWqvQ.jpeg)

I hope you enjoyed this write-up! If you found it helpful, feel free to connect with me on LinkedIn or Twitter.

Follow Me On Linked in (Most Active):

[https://www.linkedin.com/in/manan-sanghvi-799863176/](https://www.linkedin.com/in/manan-sanghvi-799863176/)

Follow Me On Twitter:

[https://twitter.com/An____Anonymous](https://twitter.com/An____Anonymous)

Thank You.`;export{e as _};
