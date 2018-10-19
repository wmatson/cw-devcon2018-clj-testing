(ns figwheel.connect.build-dev (:require [reveal.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/reveal.core.on-js-reload (apply js/reveal.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'reveal.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

