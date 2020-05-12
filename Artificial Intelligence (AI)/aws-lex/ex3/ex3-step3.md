# Step 3: Create a Lambda function

In this section you create a Lambda function using a blueprint ([**lex-book-trip-python**](../source/lex-book-trip-python.py)) provided in the AWS Lambda console. You also test the Lambda function by invoking it using sample event data provided by the console.

This Lambda function is written in Python.

1. Sign in to the AWS Management Console and open the AWS Lambda console at [https://console.aws.amazon.com/lambda/](https://console.aws.amazon.com/lambda/).

1. Choose **Create function**.

1. Choose **Use a blueprint**. Type **lex** to find the blueprint, choose the [`lex-book-trip-python`](../source/lex-book-trip-python.py) blueprint.

1. Choose **Configure** the Lambda function as follows and then choose **Create Function**.
   + Type a Lambda function name (`BookTripCodeHook`).
   + Leave the other default values.

1. Test the Lambda function. You invoke the Lambda function twice, using sample data for both booking a car and booking a hotel. 

   1. Choose **Configure test event** from the **Select a test event** drop down.

   1. Choose **Amazon Lex Book Hotel** from the **Event template** list.

   1. In the **Event name** field, enter a name for the event ([`BookHotelTest`](../source/lex-book-hotel-test.json)).

   1. Choose **Create**.

   1. Verify that the Lambda function successfully executed. The response in this case matches the Amazon Lex response model.

   1. Repeat the step. This time you choose the **Amazon Lex Book Car** from the **Event template** list, and named [**BookCarTest**](../source/lex-book-car-test.json). The Lambda function processes the car reservation.
   
     
**BookHotelTest**
   ```
   {
     "messageVersion": "1.0",
     "invocationSource": "DialogCodeHook",
     "userId": "John",
     "sessionAttributes": {},
     "bot": {
       "name": "BookTrip",
       "alias": "$LATEST",
       "version": "$LATEST"
     },
     "outputDialogMode": "Text",
     "currentIntent": {
       "name": "BookHotel",
       "slots": {
         "Location": "Chicago",
         "CheckInDate": "2030-11-08",
         "Nights": 4,
         "RoomType": "queen"
       },
       "confirmationStatus": "None"
     }
   }
   ```
     
 **BookCarTest**
   ```
   {
     "messageVersion": "1.0",
     "invocationSource": "DialogCodeHook",
     "userId": "John",
     "sessionAttributes": {},
     "bot": {
       "name": "BookTrip",
       "alias": "$LATEST",
       "version": "$LATEST"
     },
     "outputDialogMode": "Text",
     "currentIntent": {
       "name": "BookCar",
       "slots": {
         "PickUpCity": "Chicago",
         "PickUpDate": "2030-11-08",
         "ReturnDate": "2030-11-08",
         "CarType": "economy",
         "DriverAge": 21
       },
       "confirmationStatus": "None"
     }
   }
   ```

  
**Video Referenece**  
https://www.youtube.com/watch?v=-68T9hI96CU
  
**Next Step**  
[Step 4: Add the Lambda Function as a Code Hook](ex3-step4.md)
