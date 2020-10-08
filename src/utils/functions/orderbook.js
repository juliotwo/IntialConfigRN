
export const orderBookHandle = (buyOrSell, amount, isAmountMxn, asks, bids) => {
    let side = buyOrSell;
    let ingressed_amount = parseFloat(amount == "" || amount == "." ? 0 : amount);
    let is_amount_value = isAmountMxn;
    if (side === "buy") {
        if (is_amount_value) {
            // Necesitamos calcular el monto a pagar en BTC
            let amount_to_pay = ingressed_amount;
            let amount_to_receive = 0;
            // Se busca en los asks (ordenes de venta) porque el side es BUY
            for (order of asks) {
                let is_this_order_enough = amount_to_pay <= parseFloat(order.v);

                if (is_this_order_enough) {
                    amount_to_receive += amount_to_pay / parseFloat(order.p);
                    amount_to_pay = 0;
                    break;
                }
                amount_to_pay -= parseFloat(order.v);
                amount_to_receive += parseFloat(order.a);
            }

            return {
                amount_to_receive: amount_to_receive.toFixed(8),
                amount_to_pay: ingressed_amount,
                is_enough_liquid: amount_to_pay == 0,
            };
        } else {
            // Necesitamos calcular el monto a recibir en MXN
            let amount_to_pay = 0;
            let amount_to_receive = ingressed_amount;
            // Se busca en los asks (ordenes de venta) porque el side es BUY
            for (order of asks) {
                let is_this_order_enough = amount_to_receive <= parseFloat(order.a);
                if (is_this_order_enough) {
                    amount_to_pay += amount_to_receive * parseFloat(order.p);
                    amount_to_receive = 0;
                    break;
                }
                amount_to_pay += parseFloat(order.v);
                amount_to_receive -= parseFloat(order.a);
            }

            return {
                amount_to_receive: ingressed_amount,
                amount_to_pay: amount_to_pay.toFixed(2),
                is_enough_liquid: amount_to_receive == 0,
            };
        }
    } else {
        if (is_amount_value) {
            // Necesitamos calcular el monto a recibir en BTC
            let amount_to_pay = 0;
            let amount_to_receive = ingressed_amount;
            // Se busca en los bids (ordenes de compra) porque el side es SELL
            for (order of bids) {
                let is_this_order_enough = amount_to_receive <= parseFloat(order.v);
                if (is_this_order_enough) {
                    amount_to_pay += amount_to_receive / parseFloat(order.p);
                    amount_to_receive = 0;
                    break;
                }
                amount_to_pay += parseFloat(order.a);
                amount_to_receive -= parseFloat(order.v);
            }

            return {
                amount_to_receive: ingressed_amount,
                amount_to_pay: amount_to_pay.toFixed(8),
                is_enough_liquid: amount_to_receive == 0,
            };
        } else {
            // Necesitamos calcular el monto a recibir en MXN
            let amount_to_pay = ingressed_amount;
            let amount_to_receive = 0;
            // Se busca en los bids (ordenes de compra) porque el side es SELL
            for (order of bids) {
                let is_this_order_enough = amount_to_pay <= parseFloat(order.a);
                if (is_this_order_enough) {
                    amount_to_receive += amount_to_pay * parseFloat(order.p);
                    amount_to_pay = 0;
                    break;
                }
                amount_to_pay -= parseFloat(order.a);
                amount_to_receive += parseFloat(order.v);
            }

            return {
                amount_to_receive: amount_to_receive.toFixed(2),
                amount_to_pay: ingressed_amount,
                is_enough_liquid: amount_to_pay == 0,
            };
        }
    }
};
