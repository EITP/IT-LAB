import UIKit


class ViewController: UIViewController {
    
    @IBOutlet weak var WiFiImageView: UIImageView!
    
    let tello = Tello()
    
    @IBAction func takeOffTapped(_ sender: UIButton) {
        switch tello.state {
        case .disconnected:
            showNoWiFiAlert()
            break
        case .wifiUp:
            tello.enterCommandMode()
            tello.takeOff()
            break
        case .command:
            tello.takeOff()
            getPadID()
            transit(x: 100, y: 0, z: 100, pad1: 1, pad:2)
            getPadID()
            land()
            
            break
        }
    }
    
    @IBAction func landTapped(_ sender: UIButton) {
        tello.land()
    }
    
    @IBAction func stopTapped(_ sender: UIButton) {
        tello.stop()
    }
    
    
    @IBAction func settingsTapped(_ sender: UIButton) {
    }
    
    
    func showNoWiFiAlert() {
        let alert = UIAlertController(title: "Not Connected to Tello WiFi", message: "In order to control the Tello you must be connected to its WiFi network. Turn on the Tello and then go to Settings -> WiFi to connect.", preferredStyle: .alert)
        
        alert.addAction(UIAlertAction(title: "Ok", style: .default, handler: nil))
        self.present(alert, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        

        let ssidArray = currentSSID()
        
        if connectedToSSID(ssidArray: ssidArray, SSID: "TELLO") {
            tello.state = .wifiUp
            self.WiFiImageView.image = UIImage(named: "WiFi100")
            print("Connected to Tello WiFi.")
        }
        else {
            self.WiFiImageView.image = UIImage(named: "WiFiDisconnected")
            showNoWiFiAlert()
        }
    }

}
