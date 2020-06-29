### Micro:bit tutorial – How to use Mirco:bit to work with ThinkSpeak

#### Learning target

Using Micro:bit with extension kit muselab to setup a WiFi to connect to internet and connect with ThinkSpeak Api.

#### Requirement
Hardware: Micro:bit Chip and PC with OS Windows 7 or above. MuseLab WIFI IoT shield
Setup Insert Micro:bit chip into the edge connector of Muselab WiFi IoT shield
Register a ThinkSpeak account at https://thingspeak.com
Programming languages JavaScript and Blockly

#### Tool
- Online Blockly and JavaScript editor https://makecode.microbit.org/# Micro-USB Cable (Connect it to computer and Micro:bit)
- Sign In to ThingSpeak at https://thingspeak.com/users/sign_in using your MathWorks Account
####What is ThinkSpeak ? 
ThingSpeak is an open source Internet of Things (IoT) application platform that provides cloud data storage and analysis applications for free. Through the API service it provides, we can easily transfer the data collected by external sensors to the cloud database, and use the HTTP protocol to store or retrieve data and applications.
Registration, create channel and obtain API key Steps:

1. Register ThingSpeak account (only one time)
2. Create Channels (Project)
3. Obtain the project API code (different for each project) Set public information (get URL) (may not be public)
4. Programming (data input)
5. Data export and application

#### Use Blockly Steps

1. Please Setup Micro:bit with extension kit muselab to setup a WiFi to connect to internet. Detail please check at https://github.com/EITP/EITPCode/blob/master/IoT%20Coding/microbit/samples/WiFi%20Setup/tutorial04.md
2. Open the browser and go to online editor program page at URL below Https://makecode.microbit.org/#
3. Go to Input section, drag a “on Button” place on editor.
4. Go to MuseIOT section, drag a “send ThinkSpeak key” block under the “on button” block for sending the ThingSpeak command by pressing B button.
5. Go to your ThinkSpeak account, click on API section and find the API Key from ThingSpeak. you need to use your own API key
6. Input the key where is the ThingSpeak API key into the field1 is the value you want to upload.

#### Burn the program to Micro:bit

1. Name the written program
2. Save the written Blockly program to the computer
3. Move the program in the previous step to Micro: bit for burning
4. Test on Micro:bit

#### Results

- The Muselab OLED screen will show shield information 
“ThinkSpeak Uploading.. Upload OK”
- Check your ThinkSpeak channel, the field 1 chart will be connect with your Microbit.
Quick Try
- You can download the microbit-MBwithTS.hex file from source folder and put it directly to your Micro:bit Chip for trial.

#### Video 
https://www.youtube.com/watch?v=ZA372OsW83Y&list=PL7dtPnQuxetKLwHRYwa8BuQSvplpDu_5p&index=6&t=0s

#### Reference 
https://microbit.org/hk/code/ https://makecode.microbit.org/ https://thingspeak.com/
