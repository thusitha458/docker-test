const mongoose = require('mongoose');
/**
 * Transactions format:
 * there should be users and transactions.
 * A reference id should be there. Transactions should be stored in the database.
 * {
 *     referenceId: reference id,
 *     payer: payer,
 *     payee: payee,
 *     status: status of the transaction,
 *     items: [{ items related information }, {...}, ...],
 *     amount: amount of money,
 *     currency: currency code
 * }
 **/
const schema = new mongoose.Schema({
    referenceId: { unique: true, type: String, required: true },
    payer: { type: String, required: true },
    payee: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: mongoose.Schema.Types.Decimal128, required: true },
    currency: { type: String, required: true},
    items: { type: Array, required: true }
});

module.exports = mongoose.model('transaction', schema);