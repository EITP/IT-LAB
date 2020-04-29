# Collecting data autonomously

### Overview
Apart from other toy drones, Tello EDU have excellent flight performance. Specifically, Tello EDU is one of drones at the moment to feature optical and infrared sensors that help in positioning and altitude hold. Under optimum lighting conditions, the downward positioning sensor helps the Tello EDU “see” the ground and maintain its flight position while the two infrared sensors help it accurately maintain its altitude.

Downward positioning sensor of Tello EDU has the ability to recognize the designed pattern, you can also recognize a person’s face. By knowing the pattern, Tello can know exactly Mission Pad's ID and its coordinates.

To get Tello’s Galaxy ID and Coordinates, you need to use the Mission Pad provided. The Mission Pad’s ID will be used as the Galaxy ID, and when Tello is flying above a Mission Pad, Tello’s downward positioning sensor can identify its coordinates in terms of the Mission Pad’s coordinates system.

Like a camera, Tello downward positioning sensor has a limited sensing range. When Tello has flew too far or too high from a Mission Pad, Tello may not be able to find and recognize the Mission Pad, hence cannot identify the Galaxy ID and the coordinates. 

To get the best recognition result of the Mission Pad, It is recommended to fly Tello with a height range from 20cm to 100cm, and within a horizontal square above the Mission Pad, with a side length of 60 cm


## Tutorial 

### Precondition:
Use Swift commands to tell Tello to take off and land
To begin with, you need to first take off. You will write Swift commands to tell Tello to take off and land. When using takeOff() and land(), you don’t have to put anything insides the parentheses.

1.	Put a Mission Pad on a flat surface
2.  Place your Tello on a Mission Pad
2.	Make sure the battery level is above 20%
3.	Take off and use getPadID() to get the galaxy ID, and use getPadPos() to get Tello's coordinates
4.	Get the current coordinates, and then land
6.	Tap Run My Code

In order to tell Tello to fly up and down, as you need to specify the distance. Tello measures flying distance in centimeters, so flyUp(cm: 100) means fly up 100 cm from the current height. Here, the distance is relative to the current position, so to use flyUp(cm :100) again Tello will fly up 100cm again.

Before you tell Tello to fly up, make sure there is enough space above it. However, you can tell Tello to fly down as far as you want without worrying about crashing. Tello’s Downward Positioning Sensor keeps monitoring the distance below, and will stop flying when the minimum distance is reached. After fly up and down, you can tell Tello to fly forward and backward by using flyForward(cm: Int) and flyBackward(cm: Int). 

### Reading the Coordinates and 
After you have learned essential commands, let it fly around the object from the side as daily inspections for space station. Firstly, gather information from Tello’s botton sensor and don’t worry if you don’t get it right the first time. This is your chance to experiment and explore.
Tips
1.	Remember to enter SDK mode
2.	Fly forward until you are close to the object, fly up and fly forward to cross the whole length of object then fly backward and fly down.
3.	Fly along the path as indicated

### Fly to Given Coordinate 
To change its orientation, you may use turnLeft(degree: Int) and turnRight(degree: 
Int) commands. 

Degree insides the parentheses indicate much you want Tello to turn. You can choose between 0 to 3600. If you choose 3600, Tello will complete 10 full turns. 
