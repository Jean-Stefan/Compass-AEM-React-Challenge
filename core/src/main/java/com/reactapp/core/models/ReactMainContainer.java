/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code ReactMainContainer} Sling Model used for the {@code reactapp/components/react-main-container} component.
 * 
 */
@ConsumerType
public interface ReactMainContainer
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("titleColor")
    String getTitleColor();

    @JsonProperty("text")
    String getText();

    @JsonProperty("textColor")
    String getTextColor();

    @JsonProperty("button")
    String getButton();

    @JsonProperty("buttonBkgdColor")
    String getButtonBkgdColor();

    @JsonProperty("buttonTextColor")
    String getButtonTextColor();

}
