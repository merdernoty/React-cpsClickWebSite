import React,{ useContext }from 'react'
import './Text.scss'
import { ThemeContext } from "../DarkTheme/Theme"
import "../DarkTheme/Theme.scss";

function Text() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <div className='trans-main' id={theme}>
      <div className='trans1'></div>
      <div className='trans2'></div>
    </div>
    <div className='text-main'>
        <div className='text-box'>
            <div className='text'>
            <h1>What is the Jitter test?</h1>

The Jitter test is a click method invented by the "Minecraft" community. The jitter test is a free online site that aims to exercise and measure your click speed. This jitter click test estimates the number of clicks you make with your mouse over a given time interval.
To start the jitter click test, click on the "Start jitter speed test" button. From the first mouse click in the designated zone, the timer will start. Try to earn as many jitter clicks in the allotted time as you can as the seconds count down. When the time is over, you will get your jitter speed test result in CPS (clicks per second). A default time interval has been selected, but if you wish to change the duration, you can do so in the menu.
The objective of jitter clicking is to allow you to increase your clicks per second in order to have better performance in your favorite games when playing against other players. In certain games, such as Minecraft, the PVP requires a quick click to be able to challenge your opponents.
Practice on our Jitter click test site and try to compete against the biggest players of your favorite games.

<h1>How do you measure the CPS?</h1>

The CPS (clicks per second) is the name given to the measure of your click speed. Over a given time interval, the faster you click, the higher you can expect your CPS to increase. The CPS calculates the average of the number of clicks compared to the number of seconds of the test. So, this means that the shorter the time interval, the more accurate CPS results you will receive. As the seconds pass, it becomes increasingly difficult to hold a stable click speed as the muscles contract and tire, reducing your capabilities. It is estimated that beyond 10 seconds, your click speed capacities are not optimized and that the results do not reflect your real potential.

<h1>Our advice to increase your click speed</h1>

Increase your ability to click even faster and practice as many times as you want with free and unlimited access to our Jitter test. Click the "Try again" button and challenge yourself relentlessly! Invite your friends to take part in the test and challenge the best players.
To always perform your best on the jitter test, we have a few tips for you. We recommend straightening your finger; placing your thumb on the edge of your mouse to keep it stable and prevent it from moving; and to reduce the distance between your finger and the mouse in order to save time, which will prove to be beneficial for your click speed. Make yourself comfortable and test jitter on our website to progress further.

<h1>What are the best tools to increase your CPS?</h1>

Put all the chances on your side to increase your jitter clicking and clicks per second. To do this, equip yourself with a professional mouse, such as a gaming mouse, to give yourself the best advantage.
You can choose a mouse with optical switches as it will allow you to decrease the time of the signals of transmissions from your mouse to your computer as it occurs immediately after clicking, which is not always the case of a traditional mouse.
Finally, choose a mouse with low pressure, better sensitivity and a good grip to make it easier for you to click.
Also, check your internet connection to make sure it is stable to maximize your chances with our Jitter test.

<h1>The options of our Jitter click test</h1>

To help you progress, we have implemented various options that will allow you to monitor your progress and optimize your chances of improvement.
You will be able to have a jitter test score history that lists all the results of the tests you have taken. You will be able to track your CPS score and the time interval chosen for the tests you have taken, in the order that they were taken, to be able to visualize your record and your progress. Share your jitter speed test results on social networks or with your friends and try to challenge them!
Pick your preference and choose "Dark" or "Bright" mode to play more comfortably, and turn the test sound on or off as you wish. Our Jitter click test site is optimized for use on desktop, tablet, or mobile devices.

<h1>Is the Jitter click test dangerous to health?</h1>

Health is important, which is why we want to give a warning. Be reasonable and limit your click time. In the long term, a high frequency of jitter clicks may cause problems with your hands and joints (such as Carpal Tunnel Syndrome) depending on your frequency. Although the impact on health cannot be measured, it is still there.
            </div>
        </div>
    </div>
    </>
  )
}

export default Text