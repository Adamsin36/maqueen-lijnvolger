let snelheid = 100
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheid)
    }
})
