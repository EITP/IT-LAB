# First tutorial – Flying Tello EDU Autonomously

### Learning target

Control and let Tello EDU flying autonomously by using programing languages.
### Requirement
Hardware - PC / Mac with Python 2.7 or above.

Programming languages - Python/ Swift
Connection
`
import socket
import threading
import time
from stats import Stats

class Tello:
    def __init__(self):
        self.local_ip = ''
        self.local_port = 8889
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.socket.bind((self.local_ip, self.local_port))

        self.receive_thread = threading.Thread(target=self._receive_thread)
        self.receive_thread.daemon = True
        self.receive_thread.start()

        self.tello_ip = '192.168.10.1'
        self.tello_port = 8889
        self.tello_adderss = (self.tello_ip, self.tello_port)
        self.log = []

        self.MAX_TIME_OUT = 15.0

    def send_command(self, command):
      
        self.log.append(Stats(command, len(self.log)))

        self.socket.sendto(command.encode('utf-8'), self.tello_adderss)
        print 'sending command: %s to %s' % (command, self.tello_ip)

        start = time.time()
        while not self.log[-1].got_response():
            now = time.time()
            diff = now - start
            if diff > self.MAX_TIME_OUT:
                print 'Max timeout exceeded... command %s' % command
               
               
                return
        print 'Done!!! sent command: %s to %s' % (command, self.tello_ip)

    def _receive_thread(self):
       
        while True:
            try:
                self.response, ip = self.socket.recvfrom(1024)
                print('from %s: %s' % (ip, self.response))

                self.log[-1].add_response(self.response)
            except socket.error, exc:
                print "Caught exception socket.error : %s" % exc

    def on_close(self):
        pass
       
    def get_log(self):
        return self.log
`

### Program Tello EDU
1.	Open the browser and go to online editor program page at URL below
Https://makecode.microbit.org/#
2.	Add a new project
3.	Click “Basic” section
4.	Drag Show leds block component to forever block component in the program editing area
5.	Spot a cross shape on the show leds block points of the component
6.	Place another show leds block and leave it blank
7.	Click the Download button to download the code (file format with .hex)
8.	Find micro:bit root directory drive which is connected with your pc with USB cable.
9.	Put the program you just downloaded into [MICROBIT] root directory drive

### Quick Try
You can download the micro:bit-Flashing-Cross.hex file from source folder and put it directly to your micro:bit Chip for trial.

### Reference
https://microbit.org/hk/code/
https://makecode.microbit.org/

