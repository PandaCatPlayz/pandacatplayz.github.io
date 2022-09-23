#pragma config(Sensor, in1, LineFollower, sensorLineFollower)
#pragma config(Sensor, in2, potentiometer, sensorPotentiometer)
#pragma config(Sensor, in3, lightsensor, sensorReflection)
#pragma config(Sensor, dgtl1, limitswitch, sensorTouch)
#pragma config(Sensor, dgtl2, bumpswitch, sensorTouch)
#pragma config(Sensor, dgtl3, quad, sensorQuadEncoder)
#pragma config(Sensor, dgtl5, sonar, sensorSONAR_inch)
#pragma config(Sensor, dgtl12, green, sensorLEDtoVCC)
#pragma config(Motor, port1, FlashLight, tmotorVexFlashlight, openLoop, reversed)
#pragma config(Motor, port3, rightmotor, tmotorVex393_MC29, openLoop)
#pragma config(Motor, port2, leftmotor, tmotorVex393_MC29, openLoop)
#pragma config(Motor, port9, Servomotor, tmotorServoStandard, openLoop)

task main(){
    int i; // Initializes integer
    for(i = 0; i < 20; i++) { // For loop where i is less than 20
        startMotor(leftmotor, 127); // Start motor at max speed
        wait(0.5); // Wait half a second
        startMotor(leftmotor, -127); // Start motor at max speed in reverse direction
        wait(0.5); // Wait half a second and loop if i < 20
    }
}
