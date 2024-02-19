-- En este archivo deben estar tus ejercicios de consultas sql
1 - SELECT NOMBRES FROM EMPLEADOS ORDER BY APELLIDO DESC;

2 - SELECT e.NOMBRES, p.PUESTO, l.LOCALIDAD
    FROM EMPLEADOS as e
    JOIN PUESTOS as p ON e.PUESTO_ID = p.ID
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    JOIN LOCALIDADES as l ON d.LOCALIDAD_ID = l.ID
    WHERE p.PUESTO = 'Soporte';

3 - SELECT NOMBRES FROM EMPLEADOS WHERE LIKE ("%%o"); 

4 - SELECT e.NOMBRES, e.SUELDO, l.LOCALIDAD
    FROM EMPLEADOS as e 
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    JOIN LOCALIDADES as l ON d.LOCALIDAD_ID = l.ID
    WHERE l.LOCALIDAD = 'Carlos Paz';

5 - SELECT e.NOMBRES, e.SUELDO, l.LOCALIDAD
    FROM EMPLEADOS as e 
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    JOIN LOCALIDADES as l ON d.LOCALIDAD_ID = l.ID
    WHERE e.SUELDO BETWEEN 10000 AND 13000;

6 - SELECT d.DENOMINACION , count(*) as total
    FROM EMPLEADOS as e
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    HAVING total > 5;

7 - SELECT e.NOMBRES,
    FROM EMPLEADOS as e
    JOIN PUESTOS as p ON e.PUESTO_ID = p.ID
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    JOIN LOCALIDADES as l ON d.LOCALIDAD_ID = l.ID
    WHERE p.PUESTO =  'Analista' OR p.PUESTO = 'Programador' AND l.LOCALIDAD = 'Córdoba'

8 - SELECT AVG(SUELDO)
    FROM EMPLEADOS;

9 - SELECT MAX(SUELDO)
    FROM EMPLEADOS as e 
    WHERE e.DEPARTAMENTO_ID = 10;

10 - SELECT MIN(SUELDO)
    FROM EMPLEADOS as e
    JOIN DEPARTAMENTOS as d ON e.DEPARTAMENTO_ID = d.ID
    WHERE d.DEPARTAMENTO = 'Soporte';

11 - SELECT SUM(SUELDO), PUESTO_ID
    FROM EMPLEADOS
    GROUP BY PUESTO_ID;