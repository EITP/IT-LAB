# First micro:bit tutorial – Scissors, Hammer, Paper

### Learning target

Using micro:bit accelerometer and the screen to build a game

### Requirement
Hardware
micro:bit Chip and PC with OS Windows 7 or above.

Programming languages 
JavaScript and Blockly

### Tool
Online Blockly and JavaScript editor https://makecode.microbit.org/#
Micro-USB Cable (Connect it to computer and micro:bit)

### Use Blockly Steps
1.	Open the browser and go to online editor program page at URL below
Https://makecode.microbit.org/# 
2.	Go to Input section, drag a “shake Block” to run code when you shake the mirco:bit.
3.	Go to Variable section, create a new variable call “hand”. You will see a “set hand to” variable block, drag it and place in to Shake Block event.
4.	Go to Math Section, drag a “pick random” block into “set hand to” event and change the numbers from 1 to 3.
5.	Go to Logic section, drag the “set if then” block and add under the “pick random and set hand to” event. Add “Boolean number block” from logic section into “set if then” event and add a “hand” block from variable in “Boolean number block”.
6.	Drag a “show led” block from Basic section, add it under the “set if then” block. Draw first Picture “Scissors” on the LED screen.
7.	Now click on the SHAKE button in the simulator from micro: bit editor. You should see a picture of Scissors on the screen. The no 1 will mean “Scissors”
8.	Click the “+” button which is displayed at the bottom of the “set if then” block to add an “else” section.
9.	Add a show leds block inside the “else”. Make a picture of a Hammer in the LEDs.
10.	Click the “+” button again to add an “else if” block. Add a “Boolean number”  block for setting another hand variable = 2 into “else if” block. 
11.	Get one more show leds block and put it in the else if. Make a picture of a Paper in the LEDs.
12.	Click on the SHAKE button in the simulator and check to see that each image is showing up.

### Quick Try
You can download the micro:bit-Cross-Hammer-Paper.hex file from source folder and put it directly to your micro:bit Chip for trial.

### Reference
https://microbit.org/hk/code/
https://makecode.microbit.org/
