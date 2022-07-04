$(document).ready(function() {
    let result = 0;
    let winsCount = 0;
    let lossCount = 0;
    let crystalArr = [];
    let crystalValue = 0;
    let randomNumber = 0;
    let setUp = function () {
        crystalValue = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        result = 0;
        crystalArr = [];
        $("#targetNumber").text(randomNumber);
        $("#yourNumber").text(result);


        for (let i = 0; i < 4; i++) {
            let crystalValue = Math.floor(Math.random() * 12) + 1;
            if (crystalArr.indexOf(crystalValue) === -1) {
                crystalArr.push(crystalValue);
            } else {
                crystalValue = Math.floor(Math.random() * 12) + 1;
                crystalArr.push(crystalValue);
            }
        }
    }

    setUp();

    $("#gem1").on("click", function () {
        result += crystalArr[0];
        $("#yourNumber").text(result);
        if (result === randomNumber) {
            winsCount++;
            $("#wins").text(winsCount);
            setUp();
        } else if (result > randomNumber) {
            lossCount++;
            $("#losses").text(lossCount);
            setUp();
            }
        });

    $("#gem2").on("click", function () {
        result += crystalArr[1];
        $("#yourNumber").text(result);
        if (result === randomNumber) {
            winsCount++;
            $("#wins").text(winsCount);
            setUp();
        } else if (result > randomNumber) {
            lossCount++;
            $("#losses").text(lossCount);
            setUp();
            }
    });

    $("#gem3").on("click", function () {
        result += crystalArr[2];
        $("#yourNumber").text(result);
        if (result === randomNumber) {
            winsCount++;
            $("#wins").text(winsCount);
            setUp();
        } else if (result > randomNumber) {
            lossCount++;
            $("#losses").text(lossCount);
            setUp();
            }
    });

    $("#gem4").on("click", function () {
        result += crystalArr[3];
        $("#yourNumber").text(result);
        if (result === randomNumber) {
            winsCount++;
            $("#wins").text(winsCount);
            setUp();
        } else if (result > randomNumber) {
            lossCount++;
            $("#losses").text(lossCount);
            setUp();
            }
    });


});

