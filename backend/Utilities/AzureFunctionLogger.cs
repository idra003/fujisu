using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;

namespace FujisuBackend.Utilities
{
    /// <summary>
    /// The object that helps to track all the errors and log the results
    /// </summary>
    public class AzureFunctionLogger
    {
        /// <summary>
        /// The Azure function logger that will get the azure function loggs
        /// </summary>
        ILogger _log;
        /// <summary>
        /// Holds the errors that happened in the function
        /// </summary>
        /// <typeparam name="string">The error messages as displayed.</typeparam>        
        List<string> _errors = new List<string>();

        /// <summary>
        /// Generates the object that helps to track all the errors and log the results
        /// </summary>
        /// /// <param name="log">The Azure Function logger</param>
        public AzureFunctionLogger(ILogger log) {
            _log = log;    
        }
        /// <summary>
        /// Loggs an error
        /// </summary>
        /// <param name="message">The error message</param>
        public void error(string message) {
            _log.LogError(message);
            _errors.Add(message);
        }
        /// <summary>
        /// Allows you to log an error with an error object
        /// </summary>
        /// <param name="exception">The error of the log item</param>
        /// <param name="message">The message of the log item</param>
        public void error(Exception exception, string message) {            
            _log.LogError(exception, message);
            _errors.Add(message);
        }
        /// <summary>
        /// Logs standard information
        /// </summary>
        /// <param name="message">The info to be logged</param>
        public void log(string message) {
            _log.LogInformation(message);
        }
        /// <summary>
        /// Logs a warning information
        /// </summary>
        /// <param name="message">The info to be logged</param>
        public void warn(string message) {
            _log.LogWarning(message);
        }
        /// <summary>
        /// Returns the list of errors
        /// </summary>
        /// <returns></returns>
        public List<string> getErrors() {
            return new List<string>(_errors); //isolates the component
        }
        /// <summary>
        /// If TRUE shows that the function is in error
        /// </summary>
        public bool isInError {
            get {
                return _errors.Count > 0;
            }
        }
    }
}