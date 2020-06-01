
# Mission Pad challenge


### Overview
The mission pad is used with the Tello EDU when using the Tello SDK 2.0 for programing. The Tello EDU uses its camera to detect the mission pad ID and executes commands.

There are 4 double-sided mission pads in the Tello EDU package with each side containing a unique pattern made up of planets, a rocket, and an ID.

Rocket indicates the forward direction of the X axis. The ID is a number between 1 and 8 that is printed on each side of the mission pad. Planets display different patterns indicating the ID and coordinates, which the Tello EDU can recognize.

The pattern of each Mission Pad indicates a 3D coordinate. The origin is at the center of the Mission Pad and the plane of the pad represent the X and Y axis. Each Mission Pad has unique coordinates, so the Tello can distinguish between pads.

## Operation 

In order to work, the Mission Pad requires a Tello EDU with SDK 2.0

1.	Place the Mission Pad on a flat surface and adjust the direction of the rocket as desired
2.  Enable mission pad detection on the Tello EDU by using the "mon" command. 
3.  Place the aircraft in the center of the Mission Pad and use the "mdirection x" command to enable forward or downward camera detection.
4.  Use the "takeoff" command to takeoff the Tello EDU and hover in place. Use a command with "mid: to recognize and fly to a Mission Pad


Remark: 
