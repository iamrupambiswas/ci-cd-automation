package dev.rupam.cicdtool.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* dev.rupam.cicdtool.controller..*(..))")
    public void logBefore(JoinPoint joinPoint) {
        String method = joinPoint.getSignature().toShortString();
        Object[] args = joinPoint.getArgs();
        logger.info("Entering method: {} with arguments: {}", method, Arrays.toString(args));
    }

    @AfterReturning(pointcut = "execution(* dev.rupam.cicdtool.controller..*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        String method = joinPoint.getSignature().toShortString();
        logger.info("Exiting method: {} with return value: {}", method, result);
    }

    @AfterThrowing(pointcut = "execution(* dev.rupam.cicdtool.controller..*(..))", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable ex) {
        String method = joinPoint.getSignature().toShortString();
        logger.error("Exception in method: {} with message: {}", method, ex.getMessage(), ex);
    }
}
