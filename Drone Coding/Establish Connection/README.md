##  Introduction
TELLO EDU need to be connected with a laptop or other related devices. You can control TELLO EDU with text commands once the TELLO SDK connects to your aircraft through a WiFi UDP port. You may install additional third-party software or use Python-based code to establish a connection between TELLO and PC, MAC, or mobile devices.  There are three methods of establishing connection.

### Connection Configuration
TELLO IP: 192.168.10.1
UDP Port: 8889
Send “command” to TELLO EDU via UDP port 8889 to initiate SDK mode after set up a UDP client on the PC, MAC, or mobile device.

**a) Install additional third-party software**

Download and install additional third-party software to establish connection.

After installation, connect TELLO EDU to PC/Mac via WiFi and set up a UDP client on PC/Mac to send and receive message from TELLO EDU via the same port. Before sending action commands, send“command” command to TELLO EDU to initiate TELLO EDU SDK mode.

Reference:
https://packetsender.com

**b) Establish connection based on python2.7**

Let TELLO EDU to execute a series of actions based on python2.7 by using test.py
After established connection, run action commands to execute a series of actions. 

**c) Establish connection based on Swift**

Let TELLO EDU to execute a series of actions based on Swift by using Swift Playground app in App Store.


