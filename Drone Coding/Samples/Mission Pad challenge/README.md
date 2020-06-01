
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

Example: curve 100 100 100 500 500 500 40 m2

After enabling mission pad detection, the Tell EDU detects the Mission Pad marked 2. If the Mission Pad is recongnized successfully, the aircraft flies at a speed of 40 cm/s in a curve to the coordinates(100, 100, 100), and the second coordinates(500, 500,500). If the Mission Pad is not recognized, the aircraft hoves in peace and an "error" message is received on the PC, Mac, or mobile device.

The curve is determined by three points. In this example they are the aircraft's current position, the first coordinates(100, 100, 100), and the second coordinates (500. 500, 500). If those three points are on a straight line or they do not create a circle with a radius within 0.5 m to 10 m, then the aircraft hovers in place and an "error" message is received on the PC, Mac, or mobile device.


Example: jump 100 100 100 40 100 m1 m2

After enabling mission pad detection, the Tello EDU detects the Mission Pad marked 1. If the Mission Pad is recognized successfully, the aircraft flies at a speed of 40 cm/s to the coordinates (100, 100, 100) and hovers in place. Next, the Tello EDU detects the Mission Pad marked 2 and rotates 100 degree. If either of the pads are not recognized, the aircraft hovers in place and an "error" message is received on the PC, Mac, or mobile device.
