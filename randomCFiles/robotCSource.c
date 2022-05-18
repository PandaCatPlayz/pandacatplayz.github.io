// Sensor and motor initilizers
#pragma config(Sensor, in1, lightsensor, sensorReflection)
#pragma config(Sensor, dgtl1, encoder,  sensorQuadEncoder)
#pragma config(Sensor, dgtl12, red, sensorLEDtoVCC)
#pragma config(Sensor, dgtl4, green, sensorLEDtoVCC)
#pragma config(Motor, port3, flashlight, tmotorVexFlashlight, openLoop, reversed)
#pragma config(Motor, port2, motor, tmotorVex393_MC29, openLoop)

// Start the main code
task main()
{
    // Initialize variables
    int waitTime = 4;
    int speed = 45;
    int maxEncode = 119;
    int minEncode = -115;

    // Initializes flashlight and off LED
    turnFlashlightOn(port3,100);
    turnLEDOn(dgtl12);

    // Wait
    wait(waitTime);

    // Essentially while(true) constantly runs
    while(1==1) {
        // Detects when the light sensor is NOT BELOW OR EQUAL TO 52
        if(SensorValue[in1]>=100) {
            // Toggle LEDs
            turnLEDOff(dgtl5);
            turnLEDOn(dgtl4);

            // Wait
            wait(waitTime);

            // Run motor until encoder hits top
            startMotor(port2,-speed);
            untilEncoderCounts(maxEncode,dgtl1);
            stopMotor(port2);

            wait(waitTime/4);

            // Run motor until encoder hits bottom
            startMotor(port2,40);
            untilEncoderCounts(minEncode,dgtl1);
            stopMotor(port2);

            // Toggle LEDs
            turnLEDOn(dgtl12);
            turnLEDOff(dgtl4);
        }
    }
}
