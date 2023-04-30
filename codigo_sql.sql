-- Carros

-- get
SELECT * FROM COSTUMES

-- DETALLE CARRO
SELECT * FROM COSTUMES WHERE ID=:id

-- post
BEGIN
    INSERT INTO COSTUMES (
       id,brand,model,category_id
    ) VALUES (
        :id,
        :brand,
        :model,
        :category_id
    );

    :STATUS_CODE := 201;
END;
-- put
BEGIN
    UPDATE COSTUMES
    SET
        model = :model,
        brand = :brand,
        category_id=:category_id
    WHERE
        id = :id;

    :STATUS_CODE := 201;
END;
-- delete
BEGIN
    DELETE FROM COSTUMES
    WHERE
        id = :id;

    :STATUS_CODE := 204;
END;

-- MENSAJE
-- GET
SELECT * FROM MESSAGE
-- DETALLE
SELECT * FROM MESSAGE
WHERE ID = :id

-- POST
BEGIN

    INSERT INTO MESSAGE(ID,MESSAGETEXT) VALUES(
        :id,
        :messagetext
    );
    :STATUS_CODE:=201;
END;
-- PUT
BEGIN
    UPDATE MESSAGE
    SET
        MESSAGETEXT=:messagetext
    WHERE
        ID=:id;
    :STATUS_CODE:=201;

END;
-- DELETE
BEGIN
    DELETE FROM MESSAGE
    WHERE ID = :id;
    :STATUS_CODE:=204;
END;

-- CLIENTE
-- GET
SELECT * FROM CLIENT

-- DETALLE
SELECT * FROM CLIENT
WHERE ID = :id;
-- POST
BEGIN
    INSERT INTO CLIENT(ID,NAME,EMAIL,AGE) VALUES(
        :id,
        :name,
        :email,
        :age
    );
    :STATUS_CODE:=201;
END;
-- PUT
BEGIN
    UPDATE CLIENT
    SET
        NAME = :name,
        EMAIL = :email,
        AGE =:age
    WHERE
        ID = :id;
    :STATUS_CODE:=201;
END;
-- DELETE
BEGIN
    DELETE FROM CLIENT
    WHERE 
        ID=:id;
    :STATUS_CODE:=204;
END;
