import CartList from './cartList/CartList';
import CartSum from './cartSum/CartSum';

const Cart = () => {
    return (
        <div style={{ backgroundColor: '#f3f6ff' }}>
            <div style={{ width: '95%', margin: '0 auto', padding: '30px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <CartList />
                    <CartSum />
                </div>
            </div>
        </div>
    );
};

export default Cart;
