
async function app() {
    // Define a model for linear regression.
    const model = tf.sequential();
    if (numero_capas == "1" || numero_capas == "2" || numero_capas == "3") {
        model.add(tf.layers.dense({ units: neuronas1, activation: funciona1, inputShape: [1] }));
    }
    if (numero_capas == "2" || numero_capas == "3") {
        model.add(tf.layers.dense({ units: neuronas2, activation: funciona2 }));
    }
    if (numero_capas == "3") {
        model.add(tf.layers.dense({ units: neuronas3, activation: funciona3 }));
    }

    model.add(tf.layers.dense({ units: 1 }));

    // Prepare the model for training: Specify the loss and the optimizer.

    model.compile({
        loss: 'meanSquaredError',
        optimizer: tf.train.adam(optimizador),//(0.005),tf.train.sgd(0.001),
        metrics: ['acc']
    });

    //  Create data.

    const xs = tf.tensor2d(datosx, [datosx.length, 1]);
    const xg = Array.from(await xs.data());
    const ys = tf.tensor2d(datosy, [datosy.length, 1]);
    const yg = Array.from(await ys.data());

    const zs = tf.tensor2d(datosx, [datosx.length, 1]);

    // Print training evolution.
    var c = 0;
    async function training() {
        console.log("break = " + breakk);
        if (breakk == 0) {
            console.log("train");
            const ou = await model.predict(zs);//.print();
            const oug = Array.from(await ou.data());

            const xyg = new Array();
            var constant = 0;
            xg.forEach(function (element) {
                xyg[constant] = new Array(3);
                xyg[constant][0] = xg[constant];
                xyg[constant][1] = yg[constant];
                xyg[constant][2] = oug[constant];
                constant = constant + 1;
            });

            addgraf(xyg);
            c = c + 1;
            $("#epoca").text(c);
            if ($("#epocas").val() == c) {
                $("#parametros_btton").css("opacity", 1);
                $("#parametros_btton").attr("href", "#app1")
            } else { $("#parametros_btton").css("opacity", 0.2); $("#parametros_btton").attr("href", "#app2") }
            console.log(c);//logs.loss);
        }
        if (breakk == 1) {
            $("#parametros_btton").css("opacity", 1);
            $("#parametros_btton").attr("href", "#app1");
        }
    }
    var index = 0;
    // Train the model using the data.
    for (index = 0; index < epocas; index++) {
        const her = await model.fit(xs, ys, { epochs: 1, callbacks: { onEpochEnd: (epoch, logs) => { training() } } }).then(() => {

            //const ou = model.predict(zs).print(); // .print() mostrar en consola
        });
        //console.log(her.history.val_acc);
        //console.log(her.history.loss[0]);
    }
    //console.log(index);
    
    console.log("loss");
}

//app();