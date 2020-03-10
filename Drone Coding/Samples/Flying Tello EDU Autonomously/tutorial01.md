# First tutorial – Flying Tello EDU Autonomously

### Learning target

Control and let Tello EDU flying autonomously by using programing languages.
### Requirement
Hardware - PC / Mac with Python 2.7 or above.

Programming languages - Python/ Swift

### Program Tello EDU
1.	Connecting to the airframe via a WiFi UDP port.
2.	Configuration setup based on network information
```python
class Tello:
    def __init__(self):
        self.local_ip = ''
        self.local_port = xxxx
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.socket.bind((self.local_ip, self.local_port))

        self.receive_thread = threading.Thread(target=self._receive_thread)
        self.receive_thread.daemon = True
        self.receive_thread.start()

        self.tello_ip = 'xxx.xxx.xx.x'
        self.tello_port = xxxx
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
        return self.log`
```

```Swift
class Tello : CustomStringConvertible {
    
    var description: String {
        return "Tello:: IP: xxx.xxx.xx.x"
    }
    
    let IP_ADDRESS = "xxx.xxx.xx.x"
    let UDP_CMD_PORT = xxxx
    let UDP_STATE_PORT = xxxx
    let UDP_VS_PORT = xxxxx
    let TIME_BTW_COMMANDS = 0.5
    
    var state: STATE
    var client: UDPClient?
    
    init(port: Int32) {
        self.state = .disconnected
        client = UDPClient(address: IP_ADDRESS, port: port)
    }
    
    convenience init() {
        self.init(port: xxxx)
    }
```
3.	Design your flying pattern / path
4.	Write the script based on the designed pattern / path
5.	Place your TELLO EDU on a flat surface 
6.	Program Tello EDU to fly in patterns.


### Quick Try
You can download the third-party software, Packetsender, to connect and control your Tello EDU.


