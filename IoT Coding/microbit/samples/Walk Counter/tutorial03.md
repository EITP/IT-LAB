
# micro:bit tutorial – Walk-Counter

### Learning target

Using micro:bit accelerometer and the screen to build a walk counter.

### Requirement
Hardware
micro:bit Chip and PC with OS Windows 7 or above.

Programming languages 
JavaScript and Blockly

###Tool
Online Blockly and JavaScript editor https://makecode.microbit.org/#
Micro-USB Cable (Connect it to computer and micro:bit)

### Use Blockly Steps

1.	Open the browser and go to online editor program page at URL below Https://makecode.microbit.org/#
2.	Go to Input section, drag a “shake Block” to run code when you shake the micro:bit.
3.	Go to Variable section, make a variable called "Walk".
4.	Go to Variable section, drag a change variable into the Shake block event, set Walk variable count by 1.
5.	Go to LED section, drag a stop animation and place below the change variable to cancels the current animation and clears other pending animations. This event can remove the lag, in the display of walk on micro:bit display. 
6.	Go to Basic section to drag a forever block and place the show variable as "walk".
7.	Now click on the SHAKE button in the simulator from micro:bit editor. You should see it is counting number.
8.	To reset the counts from the Micro:bat when press the button A. Go to Input section, drag "on button Block" and select button A as a pressed. Place a set variable block with Walk variable to zero. 

### Burn the program to micro:bit
1.	Name the written program
2.	Save the written Blockly program to the computer
3.	Move the program in the previous step to Micro: bit for burning
4.	Test on micro:bit

### Results
When shaking is detected, calculate the number of steps and display the current step number in the LED.

### Quick Try
You can download the Walk-Counter.hex file from source folder and put it directly to your micro:bit Chip for trial.

### Video Playlist
https://www.youtube.com/watch?v=sUuApWRIxkQ&list=PL7dtPnQuxetKLwHRYwa8BuQSvplpDu_5p

### Reference
https://microbit.org/hk/code/
https://makecode.microbit.org/
