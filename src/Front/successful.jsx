import css from "../style.module.css"
export const Succssful = () => {

    return(
        <div className={css.succssesPage}>
            <div className={css.succssesmMsage}>
                <img className={css.succssesIcon} src={"https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/2705@2x.png"} alt="" />
                <h1 className={css.successTitle}>Successfully completed</h1>
            </div>
        </div>
    )
}