package com.codigotruko.api.handlers;

import com.codigotruko.api.domain.dtos.GeneralResponse;
import com.codigotruko.api.utils.ErrorMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@ControllerAdvice
@Slf4j
public class GlobalErrorHandler {

    private final ErrorMapper errorMapper;

    public GlobalErrorHandler(ErrorMapper errorMapper) {
        this.errorMapper = errorMapper;
    }

    @ExceptionHandler(Exception.class)
    private ResponseEntity<GeneralResponse> GeneralExceptionHandler(Exception e){
        log.error(e.getMessage());
        log.error(e.getClass().toGenericString());
        return GeneralResponse.getResponse(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NoResourceFoundException.class)
    private ResponseEntity<GeneralResponse> NoResourceFoundExceptionHandler(NoResourceFoundException e){
        return GeneralResponse.getResponse(HttpStatus.NOT_FOUND, e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    private ResponseEntity<GeneralResponse> BadRequestExceptionHandler(MethodArgumentNotValidException e){
        e.getBindingResult().getFieldErrors();
        return GeneralResponse.getResponse(HttpStatus.BAD_REQUEST, errorMapper.map(e.getFieldErrors()));
    }
}
