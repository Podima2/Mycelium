(define-constant sender 'SZ2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKQ9H6DPR)
(define-constant recipient 'SM2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKQVX8X0G)

(define-constant ERR_INVALID_STRING u0)
(define-constant ERR_STX_TRANSFER u1)

(define-data-var price uint u100)


(define-public (hello)
    (begin
        (unwrap! (eq (var-get price) u100) (err ERR_INVALID_STRING))
        (unwrap! (principal-eq? tx-sender sender) (err ERR_STX_TRANSFER))
        (transfer recipient (var-get price))
    )
)