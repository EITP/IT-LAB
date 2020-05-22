# Micro:bit tutorial – How to use Mirco:bit to connect to internet

### Learning target
Using Micro:bit with extension kit muselab to setup a WiFi to connect to internet.

### Requirement
Hardware:
Micro:bit Chip and PC with OS Windows 7 or above.
MuseLab WIFI IoT shield

Setup
Insert Micro:bit chip into the edge connector of Muselab WiFi IoT shield

Programming languages 
JavaScript and Blockly

### Tool
Online Blockly and JavaScript editor https://makecode.microbit.org/#
Micro-USB Cable (Connect it to computer and Micro:bit)

### Use Blockly Steps

1.	Open the browser and go to online editor program page at URL below Https://makecode.microbit.org/#
2.	Go to Extension (advance/add package) and enter Muselab to install additional instructions for Muselab WiFi Booster 
3.	Go to the MuseIOT section, drag out "Initialize Muselab WiFi Booster and OLED" added to on start event. Set WiFi to ssid and pwd added to on start event
4.	Fill in the SSID and password in the form
5.	Add a 9000 ms pause time to the start event for 9 seconds. These 9 seconds are used to connect the WIFI module online
6.	For example, the SSID of WiFi is MB, "SSID" needs to enter "MB", "MB$xxxx" is the password of WiFi

### Burn the program to Micro:bit
1.	Name the written program
2.	Save the written Blockly program to the computer
3.	Move the program in the previous step to Micro: bit for burning
4.	Test on Micro:bit

### Results
The Muselab OLED screen will show shield information after “Initialize OK”

### Quick Try
You can download the Connect-Wifi.hex file from source folder and put it directly to your Micro:bit Chip for trial.

### Video Playlist
https://www.youtube.com/watch?v=B0Vdd3OkjM0&list=PL7dtPnQuxetKLwHRYwa8BuQSvplpDu_5p&index=5&t=0s

###Reference
https://microbit.org/hk/code/
https://makecode.microbit.org/
