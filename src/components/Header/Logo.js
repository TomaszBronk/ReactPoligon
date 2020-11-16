import React from 'react';

import logoImg from './G.png';

const styles = {
    width: 150,
    height: 'auto'
};

function Logo() {
    return (
    <div>
        <img src={logoImg} alt="logo" style={styles} />
    </div>
    );
}

export default Logo;