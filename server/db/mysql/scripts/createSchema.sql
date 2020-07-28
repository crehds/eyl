-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema expresionlatina
-- -----------------------------------------------------tipo_usuario

-- -----------------------------------------------------
-- Schema expresionlatina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `expresionlatina` DEFAULT CHARACTER SET utf8 ;
USE `expresionlatina` ;

-- -----------------------------------------------------
-- Table `expresionlatina`.`Profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Profesor` (
  `idProfesor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NULL,
  `edad` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idProfesor`),
  UNIQUE INDEX `idProfesor_UNIQUE` (`idProfesor` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Tipo_usuario` (
  `idTipo_usuario` INT NOT NULL AUTO_INCREMENT,
  `tipo_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NULL,
  `edad` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `tipo_usuario_idtipo_usuario` INT NOT NULL,
  PRIMARY KEY (`idUsuario`, `tipo_usuario_idtipo_usuario`),
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_Usuario_tipo_usuario1_idx` (`tipo_usuario_idtipo_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_tipo_usuario1`
    FOREIGN KEY (`tipo_usuario_idtipo_usuario`)
    REFERENCES `expresionlatina`.`Tipo_usuario` (`idTipo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `login_name` VARCHAR(15) NOT NULL,
  `login_password` VARCHAR(20) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idLogin`, `Usuario_idUsuario`),
  UNIQUE INDEX `login_name_UNIQUE` (`login_name` ASC) VISIBLE,
  UNIQUE INDEX `idLogin_UNIQUE` (`idLogin` ASC) VISIBLE,
  INDEX `fk_Login_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Login_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `expresionlatina`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Horario_dias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Horario_dias` (
  `idHorario_dias` INT NOT NULL AUTO_INCREMENT,
  `dia` VARCHAR(12) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`idHorario_dias`),
  UNIQUE INDEX `dia_UNIQUE` (`dia` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Detalle_horario_dia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Detalle_horario_dia` (
  `idDetalle_horario_dia` INT NOT NULL,
  `detalle_horario_dia_inicio` VARCHAR(45) NOT NULL,
  `detalle_horario_dia_final` VARCHAR(45) NOT NULL,
  `Horario_dias_idHorario_dias` INT NOT NULL,
  PRIMARY KEY (`idDetalle_horario_dia`, `Horario_dias_idHorario_dias`),
  INDEX `fk_Detalle_horario_dia_Horario_dias1_idx` (`Horario_dias_idHorario_dias` ASC) VISIBLE,
  CONSTRAINT `fk_Detalle_horario_dia_Horario_dias1`
    FOREIGN KEY (`Horario_dias_idHorario_dias`)
    REFERENCES `expresionlatina`.`Horario_dias` (`idHorario_dias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Nivel_Clase_Baile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Nivel_Clase_Baile` (
  `idNivel_Clase_Baile` INT NOT NULL,
  `nivel_Clase_Baile` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idNivel_Clase_Baile`),
  UNIQUE INDEX `Nivel_Clase_Baile_UNIQUE` (`nivel_Clase_Baile` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Genero_bailes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Genero_bailes` (
  `idGenero_bailes` INT NOT NULL AUTO_INCREMENT,
  `genero_baile` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idGenero_bailes`),
  UNIQUE INDEX `nombre_baile_UNIQUE` (`genero_baile` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Clases_Baile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Clases_Baile` (
  `idClases_baile` INT NOT NULL AUTO_INCREMENT,
  `nombre_clase_baile` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `Profesor_idProfesor` INT NOT NULL,
  `Nivel_Clase_Baile_idNivel_Clase_Baile` INT NOT NULL,
  `Detalle_horario_dia_idDetalle_horario_dia` INT NOT NULL,
  `Genero_bailes_idGenero_bailes` INT NOT NULL,
  PRIMARY KEY (`idClases_baile`, `Profesor_idProfesor`, `Nivel_Clase_Baile_idNivel_Clase_Baile`, `Detalle_horario_dia_idDetalle_horario_dia`, `Genero_bailes_idGenero_bailes`),
  INDEX `fk_Clases_Baile_Detalle_horario_dia1_idx` (`Detalle_horario_dia_idDetalle_horario_dia` ASC) VISIBLE,
  INDEX `fk_Clases_Baile_Profesor1_idx` (`Profesor_idProfesor` ASC) VISIBLE,
  INDEX `fk_Clases_Baile_Nivel_Clase_Baile1_idx` (`Nivel_Clase_Baile_idNivel_Clase_Baile` ASC) VISIBLE,
  INDEX `fk_Clases_Baile_Genero_bailes1_idx` (`Genero_bailes_idGenero_bailes` ASC) VISIBLE,
  CONSTRAINT `fk_Clases_Baile_Detalle_horario_dia1`
    FOREIGN KEY (`Detalle_horario_dia_idDetalle_horario_dia`)
    REFERENCES `expresionlatina`.`Detalle_horario_dia` (`idDetalle_horario_dia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clases_Baile_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `expresionlatina`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clases_Baile_Nivel_Clase_Baile1`
    FOREIGN KEY (`Nivel_Clase_Baile_idNivel_Clase_Baile`)
    REFERENCES `expresionlatina`.`Nivel_Clase_Baile` (`idNivel_Clase_Baile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clases_Baile_Genero_bailes1`
    FOREIGN KEY (`Genero_bailes_idGenero_bailes`)
    REFERENCES `expresionlatina`.`Genero_bailes` (`idGenero_bailes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Redes_sociales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Redes_sociales` (
  `idRedes_sociales` INT NOT NULL,
  `red_social` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRedes_sociales`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Profesor_has_Redes_sociales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Profesor_has_Redes_sociales` (
  `Profesor_idProfesor` INT NOT NULL,
  `Redes_sociales_idRedes_sociales` INT NOT NULL,
  `link` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`Profesor_idProfesor`, `Redes_sociales_idRedes_sociales`),
  INDEX `fk_Profesor_has_Redes_sociales_Redes_sociales1_idx` (`Redes_sociales_idRedes_sociales` ASC) VISIBLE,
  INDEX `fk_Profesor_has_Redes_sociales_Profesor1_idx` (`Profesor_idProfesor` ASC) VISIBLE,
  CONSTRAINT `fk_Profesor_has_Redes_sociales_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `expresionlatina`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Profesor_has_Redes_sociales_Redes_sociales1`
    FOREIGN KEY (`Redes_sociales_idRedes_sociales`)
    REFERENCES `expresionlatina`.`Redes_sociales` (`idRedes_sociales`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Tipo_acceso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Tipo_acceso` (
  `idTipo_acceso` INT NOT NULL AUTO_INCREMENT,
  `tipo_acceso` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo_acceso`),
  UNIQUE INDEX `tipo_acceso_UNIQUE` (`tipo_acceso` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Acceso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Acceso` (
  `idAcceso` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` VARCHAR(45) NOT NULL,
  `fecha_fin` VARCHAR(45) NOT NULL,
  `nro_clases` INT NOT NULL DEFAULT 12,
  `Login_idLogin` INT NOT NULL,
  `tipo_acceso_idtipos_acceso` INT NOT NULL,
  `bailes_matriculados_iddetalle_acceso` INT NOT NULL,
  PRIMARY KEY (`idAcceso`, `Login_idLogin`, `tipo_acceso_idtipos_acceso`, `bailes_matriculados_iddetalle_acceso`),
  INDEX `fk_Acceso_Login1_idx` (`Login_idLogin` ASC) VISIBLE,
  INDEX `fk_Acceso_tipo_acceso1_idx` (`tipo_acceso_idtipos_acceso` ASC) VISIBLE,
  CONSTRAINT `fk_Acceso_Login1`
    FOREIGN KEY (`Login_idLogin`)
    REFERENCES `expresionlatina`.`Login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Acceso_tipo_acceso1`
    FOREIGN KEY (`tipo_acceso_idtipos_acceso`)
    REFERENCES `expresionlatina`.`Tipo_acceso` (`idTipo_acceso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Acceso_a_Clases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Acceso_a_Clases` (
  `Acceso_idAcceso` INT NOT NULL,
  `Clases_Baile_idClases_baile` INT NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`Acceso_idAcceso`, `Clases_Baile_idClases_baile`),
  INDEX `fk_Acceso_a_Clases_Clases_Baile1_idx` (`Clases_Baile_idClases_baile` ASC) VISIBLE,
  CONSTRAINT `fk_Acceso_a_Clases_Acceso1`
    FOREIGN KEY (`Acceso_idAcceso`)
    REFERENCES `expresionlatina`.`Acceso` (`idAcceso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Acceso_a_Clases_Clases_Baile1`
    FOREIGN KEY (`Clases_Baile_idClases_baile`)
    REFERENCES `expresionlatina`.`Clases_Baile` (`idClases_baile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Videos_baile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Videos_baile` (
  `idVideos_baile` VARCHAR(45) NOT NULL,
  `visible` TINYINT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `ruta` VARCHAR(45) NOT NULL,
  `fecha_subida` VARCHAR(45) NOT NULL,
  `Profesor_idProfesor` INT NOT NULL,
  `Nivel_Clase_Baile_idNivel_Clase_Baile` INT NOT NULL,
  `Genero_bailes_idGenero_bailes` INT NOT NULL,
  PRIMARY KEY (`idVideos_baile`, `Profesor_idProfesor`, `Nivel_Clase_Baile_idNivel_Clase_Baile`, `Genero_bailes_idGenero_bailes`),
  INDEX `fk_Videos_baile_Profesor1_idx` (`Profesor_idProfesor` ASC) VISIBLE,
  INDEX `fk_Videos_baile_Nivel_Clase_Baile1_idx` (`Nivel_Clase_Baile_idNivel_Clase_Baile` ASC) VISIBLE,
  INDEX `fk_Videos_baile_Genero_bailes1_idx` (`Genero_bailes_idGenero_bailes` ASC) VISIBLE,
  CONSTRAINT `fk_Videos_baile_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `expresionlatina`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Videos_baile_Nivel_Clase_Baile1`
    FOREIGN KEY (`Nivel_Clase_Baile_idNivel_Clase_Baile`)
    REFERENCES `expresionlatina`.`Nivel_Clase_Baile` (`idNivel_Clase_Baile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Videos_baile_Genero_bailes1`
    FOREIGN KEY (`Genero_bailes_idGenero_bailes`)
    REFERENCES `expresionlatina`.`Genero_bailes` (`idGenero_bailes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expresionlatina`.`Acceso_a_Videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `expresionlatina`.`Acceso_a_Videos` (
  `Acceso_idAcceso` INT NOT NULL,
  `Videos_baile_idVideos_baile` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`Acceso_idAcceso`, `Videos_baile_idVideos_baile`),
  INDEX `fk_Acceso_a_Videos_Videos_baile1_idx` (`Videos_baile_idVideos_baile` ASC) VISIBLE,
  CONSTRAINT `fk_Acceso_a_Videos_Acceso1`
    FOREIGN KEY (`Acceso_idAcceso`)
    REFERENCES `expresionlatina`.`Acceso` (`idAcceso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Acceso_a_Videos_Videos_baile1`
    FOREIGN KEY (`Videos_baile_idVideos_baile`)
    REFERENCES `expresionlatina`.`Videos_baile` (`idVideos_baile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `expresionlatina`.`tipo_usuario` (`idTipo_usuario`, `tipo_usuario`) VALUES ('1', 'Administrador');
INSERT INTO `expresionlatina`.`tipo_usuario` (`idTipo_usuario`, `tipo_usuario`) VALUES ('2', 'Desarrollador');
INSERT INTO `expresionlatina`.`tipo_usuario` (`idTipo_usuario`, `tipo_usuario`) VALUES ('3', 'Estudiante');
INSERT INTO `expresionlatina`.`tipo_usuario` (`idTipo_usuario`, `tipo_usuario`) VALUES ('4', 'Becado');
