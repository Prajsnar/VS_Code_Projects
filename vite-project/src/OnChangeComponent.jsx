import { useState } from 'react'

function OnChangeComponent() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} placeholder="Enter Message" onChange={handleCommentChange} />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input
                    type="radio"
                    value="Pick-Up"
                    checked={shipping === "Pick-Up"}
                    onChange={handleShippingChange}
                    >
                </input>
                Pick-Up
            </label>
            <label>
            <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                    >
                </input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default OnChangeComponent