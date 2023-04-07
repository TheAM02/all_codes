import crypto from 'crypto';

function hash (secret) {
    const hash = crypto.createHash('sha256').update(secret).digest('hex');
    return hash
}

function validateHash (secret, hash) {
    const hashedSecret = crypto.createHash('sha256').update(secret).digest('hex');
    if (hashedSecret === hash) return true
    else return false
}

export default {
    hash,
    validateHash
}