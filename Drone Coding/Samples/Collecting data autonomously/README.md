# Collecting data autonomously

### Overview
Apart from other toy drones, Tello EDU have excellent flight performance. Specifically, Tello EDU is one of drones at the moment to feature optical and infrared sensors that help in positioning and altitude hold. Under optimum lighting conditions, the downward positioning sensor helps the Tello EDU “see” the ground and maintain its flight position while the two infrared sensors help it accurately maintain its altitude.

Downward positioning sensor of Tello EDU has the ability to recognize the designed pattern, you can also recognize a person’s face. By knowing the pattern, Tello can know exactly mission pad's ID and its coordinates.

The mission pad is used with the Tello EDU when using the Tello SDK 2.0 for programing. The Tello EDU uses its camera to detect the mission pad ID and executes commands.

There are 4 double-sided mission pads in the Tello EDU package with each side containing a unique pattern made up of planets, a rocket, and an ID.

Rocket indicates the forward direction of the X axis. The ID is a number between 1 and 8 that is printed on each side of the mission pad. Planets display different patterns indicating the ID and coordinates, which the Tello EDU can recognize.

To get mission pad's ID and Coordinates, you need to use the mission pad provided. The mission pad’s ID will be used as the ID, and when Tello is flying above a mission pad, Tello’s downward positioning sensor can identify its coordinates in terms of the mission pad’s coordinates system.

Like a camera, Tello downward positioning sensor has a limited sensing range. When Tello has flew too far or too high from a mission pad, Tello may not be able to find and recognize the mission pad, hence cannot identify the ID and the coordinates. 

To get the best recognition result of the mission pad, It is recommended to fly Tello with a height range from 20cm to 100cm, and within a horizontal square above the mission pad, with a side length of 60 cm


## Tutorial 

### Precondition:
Use Swift commands to tell Tello to take off and land
To begin with, you need to first take off. You will write Swift commands to tell Tello to take off and land. When using takeOff() and land(), you don’t have to put anything insides the parentheses.

1.	Put a mission pad on a flat surface
2.  Place your Tello on a mission pad
2.	Make sure the battery level is above 20%
3.	Take off and use getPadID() to get the galaxy ID, and use getPadPos() to get Tello's coordinates
4.	Get the current coordinates, and then land
6.	Tap Run My Code

Remark: In order to tell Tello to fly up and down, as you need to specify the distance. Tello measures flying distance in centimeters, so flyUp(cm: 100) means fly up 100 cm from the current height. Here, the distance is relative to the current position, so to use flyUp(cm :100) again Tello will fly up 100cm again.

Before you tell Tello to fly up, make sure there is enough space above it. However, you can tell Tello to fly down as far as you want without worrying about crashing. Tello’s Downward Positioning Sensor keeps monitoring the distance below, and will stop flying when the minimum distance is reached. After fly up and down, you can tell Tello to fly forward and backward by using flyForward(cm: Int) and flyBackward(cm: Int). 

### Reading the Coordinates  
After you have learned essential commands, let try to read the Coordinates. Firstly, gather information from Tello’s botton sensor and don’t worry if you don’t get it right the first time. This is your chance to experiment and explore.

Tips: Remember to enter SDK mode

### Fly to Given Coordinate 
By knowing the ID, and the coordinates of the destination, you can program Tello to fly directly to it. Here we use a slightly different version of flyLine(x: Int, y: Int, z: Int, id:int). by giving the ID in the end, Tello will fly in the mission pad's coordinate system, insteed of flying in its own coordinates. Without a mission pad under it, Tello's current coordinate will always reset to 0 when it's hovering.

Tips: Fly a straight line to point (x:30, y:0, z:100, id:Int). Remember to use the ID of the mission pad.
